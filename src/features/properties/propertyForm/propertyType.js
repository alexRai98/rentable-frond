import React from "react";
import { Box, FormLabel, RadioGroup, Radio } from "@chakra-ui/core";

const PropertyType = ({ propertyType, setPropertyType }) => {
  const handlePropertyType = (event) => {
    let value = event.target.value;
    setPropertyType(value);
  };

  return (
    <Box mb="30px">
      <FormLabel htmlFor="property_type" fontWeight="bold">
        Property type
      </FormLabel>
      <RadioGroup
        id="property_type"
        //defaultValue="house"
        onChange={handlePropertyType}
        value={propertyType}
        spacing={5}
        isInline
      >
        <Radio variantColor="teal" value="apartment" size="md">
          Apartment
        </Radio>
        <Radio variantColor="teal" value="house" size="md">
          House
        </Radio>
      </RadioGroup>
    </Box>
  );
};

export default PropertyType;
