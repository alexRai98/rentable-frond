import React from "react";
import { Box, FormLabel, Switch, Text } from "@chakra-ui/core";

const SwitchPetsAllowed = ({ petsAllowed, setPetsAllowed }) => {
  const handleChange = (event) => {
    let value = !petsAllowed;
    if (event.target.value) setPetsAllowed(value);
    // console.log(value);
  };

  return (
    <Box mb="30px">
      <FormLabel fontWeight="bold" htmlFor="pets">
        Pets allowed
      </FormLabel>
      <Switch
        id="pets"
        color="teal"
        size="md"
        //onChange={handlePetsAllowed}
        onChange={handleChange}
        defaultIsChecked
        // name="pets_allowed"
        value={petsAllowed}
      />
      <Text fontSize="14px" color="#718096" w="485px">
        Allowing pets increases the likehood of renters liking the property by
        9001%. It also makes you a better person.
      </Text>
    </Box>
  );
};

export default SwitchPetsAllowed;
