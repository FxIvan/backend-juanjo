const express = require("express");
const router = express.Router();
const {
  boomHandler,
  protect,
  admin,
  mitigate,
  joiValidation,
} = require("../middleware");

const { registerUser } = require("../controllers");

router
  .route("/register")
  .post(/*joiValidation(userRegisterSchema),*/ registerUser, boomHandler);

module.exports = router;
