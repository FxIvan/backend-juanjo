const asyncHandler = require("express-async-handler");
const { Property } = require("../models");

const createdProperty = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    price,
    addressBody,
    propertyType,
    status,
    featuresBody,
    amenities,
    images,
  } = req.body;
  try {
    const property = await Property.create({
      title,
      description,
      price,
      address: {
        street: addressBody.street,
        city: addressBody.city,
        state: addressBody.state,
        zipCode: addressBody.zipCode,
        country: addressBody.country,
        coordinates: {
          latitude: addressBody.coordinates.latitude,
          longitude: addressBody.coordinates.longitude,
        },
      },
      propertyType,
      status,
      features: {
        bedrooms: featuresBody.bedrooms,
        bathrooms: featuresBody.bathrooms,
        squareFeet: featuresBody.squareFeet,
        lotSize: featuresBody.lotSize,
        yearBuilt: featuresBody.yearBuilt,
        parking: featuresBody.parking,
        garage: featuresBody.garage,
        pool: featuresBody.pool,
        heating: featuresBody.heating,
        cooling: featuresBody.cooling,
        petsAllowed: featuresBody.petsAllowed,
        fireplace: featuresBody.fireplace,
        balcony: featuresBody.balcony,
        flooringType: featuresBody.flooringType,
        furnished: featuresBody.furnished,
        hoaFees: featuresBody.hoaFees,
      },
      amenities,
      images,
    });

    await property.save();
    res.status(201).json({ message: "Property created successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

const updatedProperty = asyncHandler(async (req, res) => {
  try {
  } catch (err) {}
});

const deletedProperty = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
  } catch (err) {}
});

module.exports = {
  createdProperty,
  updatedProperty,
  deletedProperty,
};
