const express = require("express");
const router = express.Router();

const {
  createdProperty,
  updatedProperty,
  deletedProperty,
} = require("../controllers");

router.route("/created").post(createdProperty);
router.route("/updated").post(updatedProperty);
router.route("/deleted/:id").post(deletedProperty);

module.exports = router;
