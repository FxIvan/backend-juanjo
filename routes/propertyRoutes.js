const express = require("express");
const router = express.Router();

const {
  createdProperty,
  updatedProperty,
  deletedProperty,
  allProperties,
} = require("../controllers");

router.route("/created").post(createdProperty);
router.route("/updated/:id").post(updatedProperty);
router.route("/deleted/:id").post(deletedProperty);
router.route("/all").get(allProperties);

module.exports = router;
