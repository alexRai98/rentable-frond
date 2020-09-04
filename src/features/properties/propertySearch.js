import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Box,
  Button,
  ButtonGroup,
  Select,
} from "@chakra-ui/core";

const PropertySearch = () => {
  return (
    <Box
      d="flex"
      mb="28px"
      w="100%"
      maxW="1140px"
      justifyContent="space-between"
    >
      <Box d="flex">
        <InputGroup size="sm" mr="12px">
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input type="search" placeholder="Your addres here" w="368px" />
        </InputGroup>

        <ButtonGroup spacing="12px">
          <Button
            borderColor="#4FD1C5"
            color="#4FD1C5"
            variant="outline"
            size="sm"
          >
            Price
          </Button>

          <Button
            borderColor="#4FD1C5"
            color="#4FD1C5"
            variant="outline"
            size="sm"
          >
            Property type
          </Button>

          <Button
            borderColor="#4FD1C5"
            color="#4FD1C5"
            variant="outline"
            size="sm"
          >
            Beds & baths
          </Button>

          <Button
            rightIcon="small-add"
            borderColor="#4FD1C5"
            color="#4FD1C5"
            variant="outline"
            size="sm"
          >
            More
          </Button>
        </ButtonGroup>
      </Box>

      <Select size="sm" w="160px" border="none" cursor="pointer">
        <option value="option3" selected>
          Buying and Renting
        </option>
        <option value="option1">Buying</option>
        <option value="option2">Renting</option>
      </Select>
    </Box>
  );
};

export default PropertySearch;
