const asyncHandler = require("express-async-handler");
const { UserModel } = require("../models");
const crypto = require("crypto");
const Boom = require("@hapi/boom");

const registerUser = asyncHandler(async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const parsedEmail = email.toLowerCase();
    const userExists = await UserModel.findOne({ email: parsedEmail });
    if (userExists)
      throw Boom.badRequest("User with this email already exists");

    if (password !== confirmPassword)
      throw Boom.badRequest("Passwords do not match");

    const newUser = await UserModel.create({
      email: email.toLowerCase(),
      emailToken: crypto.randomBytes(64).toString("hex"),
      password,
      role: "admin",
      isActive: true,
    });

    if (!newUser)
      throw Boom.badRequest("User could not be created, please try again");

    /*const msgSent = await sendEmail(
      await activateUserEmail(
        newUser.email,
        newUser.emailToken,
        req,
        language,
        nameGroup
      )
    );*/

    /*if (!msgSent)
      throw Boom.badRequest(t("error:user.registerUser.activationNotSent"));*/

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = {
  registerUser,
};
