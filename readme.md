> localhost:4000/api/property/created
> Body ejemplo

```
{
  "title": "Modern Apartment",
  "description": "A stylish modern apartment in the city center.",
  "price": 200000,
  "addressBody": {
    "street": "456 Elm Street",
    "city": "New York",
    "state": "NY",
    "zipCode": "10001",
    "country": "USA",
    "coordinates": {
      "latitude": 40.7128,
      "longitude": -74.0060
    }
  },
  "propertyType": "apartment",
  "status": "rent",
  "featuresBody": {
    "bedrooms": 2,
    "bathrooms": 1,
    "squareFeet": 900,
    "lotSize": 0,
    "yearBuilt": 2010,
    "parking": false,
    "garage": false,
    "pool": false,
    "heating": "central",
    "cooling": "central",
    "petsAllowed": true,
    "fireplace": false,
    "balcony": false,
    "flooringType": "carpet",
    "furnished": true,
    "hoaFees": 0
  },
  "amenities": [
    "gym",
    "rooftop lounge"
  ],
  "images": [
    {
      "url": "https://example.com/image1.jpg",
      "description": "Living room"
    },
    {
      "url": "https://example.com/image2.jpg",
      "description": "Kitchen"
    }
  ]
}
```
