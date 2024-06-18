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

> localhost:4000/api/property/updated/6671957a4486a84164370036

```
{
  "title": "Luxury Condo UPDATED",
  "description": "A luxurious condo with stunning city views.",
  "price": 750000,
  "addressBody": {
    "street": "789 Pine Street",
    "city": "San Francisco",
    "state": "CA",
    "zipCode": "94108",
    "country": "USA",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194
    }
  },
  "propertyType": "land",
  "status": "sale",
  "featuresBody": {
    "bedrooms": 3,
    "bathrooms": 2,
    "squareFeet": 1500,
    "lotSize": 0,
    "yearBuilt": 2015,
    "parking": true,
    "garage": true,
    "pool": true,
    "heating": "forced air",
    "cooling": "central air",
    "petsAllowed": false,
    "fireplace": true,
    "balcony": true,
    "flooringType": "tile",
    "furnished": false,
    "hoaFees": 300
  },
  "amenities": [
    "swimming pool",
    "sauna",
    "gym"
  ],
  "images": [
    {
      "url": "https://example.com/image3.jpg",
      "description": "Bedroom with city view"
    },
    {
      "url": "https://example.com/image4.jpg",
      "description": "Spacious living room"
    }
  ]
}

```

> docker stop ID_CONTAINER ID_CONTAINER
> docker rm ID_CONTAINER ID_CONTAINER
> docker-compose up -d

### Para ver los logs es:

> docker logs ID_CONTAINER
