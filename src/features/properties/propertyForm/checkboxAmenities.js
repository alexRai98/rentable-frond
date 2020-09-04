import React from "react";
import { Box, FormLabel, CheckboxGroup, Checkbox } from "@chakra-ui/core";

const CheckboxAmenities = ({
  apartmentAmenities,
  setApartmentAmenities,
  buildingAmenities,
  setBuildingAmenities,
  closeBy,
  setCloseBy,
  label,
  array,
}) => {
  const handleAmenities = (value) => {
    if (apartmentAmenities) setApartmentAmenities(value);
    if (buildingAmenities) setBuildingAmenities(value);
    if (closeBy) setCloseBy(value);
  };

  return (
    <Box>
      <FormLabel fontWeight="bold">{label}</FormLabel>
      <CheckboxGroup
        isInline
        spacing={4}
        variantColor="teal"
        size="md"
        mb="14px"
        //defaultValue={["TV", "Dishwasher"]}
        //onChange={val => console.log(val)}
        //onChange={(val) => (form.apartment_amenities = val)}
        onChange={handleAmenities}
      >
        {array.map((item, index) => (
          <Checkbox key={index} value={item}>
            {item}
          </Checkbox>
        ))}
      </CheckboxGroup>
    </Box>
  );
};

export default CheckboxAmenities;
