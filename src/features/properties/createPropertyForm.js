import React from "react";
import {
  Input,
  Text,
  Box,
  FormControl,
  FormLabel,
  Button,
  RadioButtonGroup,
  Radio,
  RadioGroup,
  Select,
  Checkbox,
  CheckboxGroup,
  Switch,
  Textarea,
} from "@chakra-ui/core";

// Step 1: Create a component that accepts `isChecked` and `isDisabled` prop
const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, value, ...rest } = props;
  return (
    <Button
      size="sm"
      borderRadius="none"
      ref={ref}
      variantColor={isChecked ? "teal" : "gray"}
      aria-checked={isChecked}
      role="radio"
      {...rest}
    />
  );
});

// Step 2: Add `CustomRadio` as children of `RadioButtonGroup`
function OperationType() {
  return (
    <RadioButtonGroup
      defaultValue="rent"
      onChange={(val) => console.log(val)}
      display="flex"
    >
      <CustomRadio value="sell">Sell</CustomRadio>
      <CustomRadio value="rent">Rent</CustomRadio>
    </RadioButtonGroup>
  );
}

const CreatePropertyForm = () => {
  return (
    <Box w="100%" maxW="1140px">
      <Text fontSize="28px" fontWeight="bold">
        Create listing property
      </Text>
      <Text fontSize="24px" fontWeight="bold">
        Listing information
      </Text>

      <FormControl>
        <FormLabel fontWeight="bold">Operation type</FormLabel>
        <OperationType />
        <Text fontSize="14px" color="#718096">
          Are you looking to rent or sell this property?
        </Text>

        <FormLabel htmlFor="addres" fontWeight="bold">
          Addres
        </FormLabel>
        <Input id="addres" size="sm" w="392px" />

        <FormLabel htmlFor="monthly_rent" fontWeight="bold">
          Monthly rent
        </FormLabel>
        <Input id="monthly_rent" size="sm" w="392px" />

        <FormLabel htmlFor="maintenance" fontWeight="bold">
          Maintenance
        </FormLabel>
        <Input id="maintenance" size="sm" w="392px" />
        <Text fontSize="14px" color="#718096">
          Amount paid to the building for maintenance.
        </Text>

        <FormLabel htmlFor="property_type" fontWeight="bold">
          Property type
        </FormLabel>
        <RadioGroup id="property_type" defaultValue="2" spacing={5} isInline>
          <Radio variantColor="teal" value="apartment" size="sm">
            Apartment
          </Radio>
          <Radio variantColor="teal" value="house" size="sm">
            House
          </Radio>
        </RadioGroup>

        <Box d="flex">
          <Box mr="12px">
            <FormLabel htmlFor="bedrooms" fontWeight="bold">
              Bedrooms
            </FormLabel>
            <Select
              id="bedrooms"
              placeholder="Select option"
              size="sm"
              w="200px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>

          <Box mr="12px">
            <FormLabel htmlFor="bathrooms" fontWeight="bold">
              Bathrooms
            </FormLabel>
            <Select
              id="bathrooms"
              placeholder="Select option"
              size="sm"
              w="200px"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>

          <Box>
            <FormLabel htmlFor="area" fontWeight="bold">
              Area (m<sup>2</sup>)
            </FormLabel>
            <Select id="area" placeholder="Select option" size="sm" w="200px">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>

        <Text fontSize="24px" fontWeight="bold">
          Amenities
        </Text>

        <FormLabel fontWeight="bold">Apartment amenities</FormLabel>
        <CheckboxGroup
          isInline
          spacing={4}
          variantColor="teal"
          size="sm"
          //defaultValue={["itachi", "kisame"]}
        >
          <Checkbox value="central air conditioning">
            Central Air Conditioning
          </Checkbox>
          <Checkbox value="Stove">Stove</Checkbox>
          <Checkbox value="Fridge">Fridge</Checkbox>
          <Checkbox value="TV">TV</Checkbox>
          <Checkbox value="Laundry room">Laundry room</Checkbox>
          <Checkbox value="Balcony">Balcony</Checkbox>
          <Checkbox value="Furnished">Furnished</Checkbox>
          <Checkbox value="Dishwasher">Dishwasher</Checkbox>
          <Checkbox value="Walk-in closet">Walk-in closet</Checkbox>
          <Checkbox value="Dog room">Dog room</Checkbox>
        </CheckboxGroup>

        <FormLabel fontWeight="bold">Building amenities</FormLabel>
        <CheckboxGroup isInline spacing={4} variantColor="teal" size="sm">
          <Checkbox value="Parking spot">Parking spot</Checkbox>
          <Checkbox value="Park">Park</Checkbox>
          <Checkbox value="Child pool">Child pool</Checkbox>
          <Checkbox value="Pool">Pool</Checkbox>
          <Checkbox value="24/7 surveillance">24/7 surveillance</Checkbox>
          <Checkbox value="Access Control">Access Control</Checkbox>
          <Checkbox value="Dog park">Dog park</Checkbox>
        </CheckboxGroup>

        <FormLabel fontWeight="bold">Close by</FormLabel>
        <CheckboxGroup isInline spacing={4} variantColor="teal" size="sm">
          <Checkbox value="Supermarket">Supermarket</Checkbox>
          <Checkbox value="Minimarket">Minimarket</Checkbox>
          <Checkbox value="Ramen restaurant">Ramen restaurant</Checkbox>
          <Checkbox value="Restaurants">Restaurants</Checkbox>
          <Checkbox value="Child school">Child school</Checkbox>
          <Checkbox value="University">University</Checkbox>
          <Checkbox value="Park">Park</Checkbox>
          <Checkbox value="Dog school">Dog school</Checkbox>
        </CheckboxGroup>

        <FormLabel fontWeight="bold" htmlFor="pets">
          Pets allowed
        </FormLabel>
        <Switch id="pets" color="teal" size="sm" />
        <Text fontSize="14px" color="#718096" w="485px">
          Allowing pets increases the likehood of renters liking the property by
          9001%. It also makes you a better person.
        </Text>

        <Text fontSize="24px" fontWeight="bold">
          About the property
        </Text>

        <FormLabel fontWeight="bold" htmlFor="description">
          Description
        </FormLabel>
        <Textarea id="description" w="620px" size="sm" />
        <Text fontSize="14px" color="#718096">
          Renters will read this first, so highlight any features or important
          information the apartment has.
        </Text>

        <FormLabel fontWeight="bold" htmlFor="photo">
          Photos
        </FormLabel>
        <input id="photo" type="file" accept="image/png, image/jpeg" multiple />
      </FormControl>
    </Box>
  );
};

export default CreatePropertyForm;
