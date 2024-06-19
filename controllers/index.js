const {
  createdProperty,
  updatedProperty,
  deletedProperty,
  allProperties,
  getPropertyById,
} = require("./propertyController");

const { registerUser } = require("./userController");

module.exports = {
  createdProperty,
  updatedProperty,
  deletedProperty,
  allProperties,
  getPropertyById,
  registerUser,
};
