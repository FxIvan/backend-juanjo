const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipCode: { type: String, required: true },
      country: { type: String, required: true },
      coordinates: {
        latitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
      },
    },
    propertyType: {
      type: String,
      enum: [
        "house",
        "apartment",
        "land",
        "commercial",
        "industrial",
        "commercial",
        "garage",
        "storage",
        "office",
        "building",
        "new_house",
        "promotion",
      ],
      required: true,
    },
    status: {
      type: String,
      enum: ["sale", "rent", "sold", "locked", "season"],
      required: true,
    },
    features: {
      bedrooms: { type: Number, required: true },
      bathrooms: { type: Number, required: true },
      squareFeet: { type: Number, required: true },
      lotSize: { type: Number, required: false },
      yearBuilt: { type: Number, required: false },
      parking: { type: Boolean, required: false },
      garage: { type: Boolean, required: false },
      pool: { type: Boolean, required: false },
      heating: { type: String, required: false },
      cooling: { type: String, required: false },
      petsAllowed: { type: Boolean, required: false },
      fireplace: { type: Boolean, required: false },
      balcony: { type: Boolean, required: false },
      flooringType: { type: String, required: false },
      furnished: { type: Boolean, required: false },
      hoaFees: { type: Number, required: false },
    },
    amenities: [Array],
    images: [
      {
        url: { type: String, required: true },
        description: { type: String, required: false },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
