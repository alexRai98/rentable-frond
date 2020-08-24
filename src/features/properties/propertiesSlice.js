import { createSlice } from '@reduxjs/toolkit'

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: [
    {
      id: 3,
      operation_type: "rent",
      addres: "Francisco de Paula Ugarriza 271, Miraflores, Lima",
      monthly_rent: 5500.25,
      maintenance: 400.75,
      property_type: "apartment",
      bedrooms: 5,
      bathrooms: 5,
      area: 30,
      apartment_amenities: [
      "Central Air Conditioning",
      "Stove",
      "Fridge",
      "TV",
      ],
      building_amenities: [
      "Parking spot",
      "Park"
      ],
      close_by: [
      "Supermarket",
      "Minimarket"
      ],
      pets_allowed: true,
      description: "Oficinas para alquiler",
      favorites_count: 0,
      owner_id: 1,
      created_at: "2020-08-18T22:58:18.850Z",
      updated_at: "2020-08-20T01:03:29.832Z"      
    },
    {
      id: 10,
      operation_type: "sell",
      addres: "prueba 7",
      monthly_rent: 7200.25,
      maintenance: 1500,
      property_type: "house",
      bedrooms: 5,
      bathrooms: 3,
      area: 40,
      apartment_amenities: [
      "Central Air Conditioning",
      "Stove"
      ],
      building_amenities: [
      "Parking spot",
      "Park"
      ],
      close_by: [
      "Supermarket",
      "Minimarket"
      ],
      pets_allowed: true,
      description: "casa con piscina",
      favorites_count: 0,
      owner_id: 1,
      created_at: "2020-08-19T20:35:02.432Z",
      updated_at: "2020-08-19T20:35:02.432Z"
    },
  ],
  reducers: {},
});

export default propertiesSlice.reducer;