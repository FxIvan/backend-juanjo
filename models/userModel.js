const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

var uniqueValidator = require("mongoose-unique-validator");

const { encrypt, decrypt } = require("../config/crypto");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
      get: (value) => value && decrypt(value),
      set: (value) => value && encrypt(value.toLowerCase()),
      validate: {
        validator: async function (value) {
          if (typeof value === "undefined") return true; // Allow undefined
          if (value === "") return true; // Allow empty string
          if (value === null) return true; // Allow null
          // Check for uniqueness, avoid actual user document
          const count = await this.model("User").countDocuments({
            email: value,
            _id: { $ne: this._id },
          });

          return count === 0;
        },
        message: "Email already exists",
      },
    },
    role: { type: String }, //groupOwner
    emailToken: {
      type: String,
      required: false,
      unique: true,
    },
    google_auth: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordToken: {
      type: String,
      required: false,
    },
    resetPasswordExpires: {
      type: Date,
      required: false,
    },
    isActive: {
      type: Boolean,
      default: false, // Update on production
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    terms_accepted: {
      type: Boolean,
      default: false,
    },
    newsletter_accepted: {
      type: Boolean,
      default: false,
    },
    notifications_accepted: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: false,
    },
    language: {
      type: String,
      default: "es",
    },
    blocked: {
      type: Boolean,
      default: false,
    },
    key_2fa: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword;
});

userSchema.plugin(uniqueValidator);

userSchema.methods.isValidPassword = async function (newPassword) {
  return await bcrypt.compare(newPassword, this.password);
};

// Excluir auth_secret al obtener datos de usuario desde la base de datos
userSchema.query.toJSON = function () {
  return this.select("-auth_secret");
};

// Excluir auth_secret al convertir un usuario a JSON
userSchema.methods.toJSON = function () {
  return { ...this.toObject(), auth_secret: undefined };
};

userSchema.index({ username: 1 }, { unique: true, sparse: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
