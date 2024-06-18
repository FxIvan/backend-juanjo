const express = require("express");
const router = express.Router();

const {
  createdProperty,
  updatedProperty,
  deletedProperty,
  allProperties,
  getPropertyById,
} = require("../controllers");
const {
  boomHandler,
  protect,
  admin,
  mitigate,
  joiValidation,
} = require("../middleware");

router.route("/info/:id").get(getPropertyById);
router.route("/created").post(admin, createdProperty, boomHandler);
router.route("/updated/:id").post(admin, updatedProperty, boomHandler);
router.route("/deleted/:id").delete(admin, deletedProperty, boomHandler);
router.route("/all").get(allProperties);

module.exports = router;
