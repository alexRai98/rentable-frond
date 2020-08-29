import React, { useState } from "react";
import {
  Input,
  InputRightAddon,
  InputGroup,
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
function OperationType({ getValue }) {
  const [operationType, setOperationType] = useState("rent");

  const handleOperationType = (val) => {
    let newOpType = val;
    setOperationType(newOpType);
    getValue(newOpType);
  };

  return (
    <RadioButtonGroup
      defaultValue={operationType}
      // onChange={(val) => console.log(val)}
      onChange={handleOperationType}
      display="flex"
    >
      <CustomRadio value="sell">Sell</CustomRadio>
      <CustomRadio value="rent">Rent</CustomRadio>
    </RadioButtonGroup>
  );
}

const CreatePropertyForm = () => {
  const [form, setForm] = useState({
    operation_type: "rent",
    addres: "",
    monthly_rent: 0,
    maintenance: 0,
    property_type: "house",
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    apartment_amenities: [],
    building_amenities: [],
    close_by: [],
    pets_allowed: true,
    description: "",
  });
  const [propertyType, setPropertyType] = useState("house");
  const [petsAllowed, setPetsAllowed] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  const handlePropertyType = (event) => {
    let newType = event.target.value;
    setPropertyType(newType);
    form.property_type = newType;
  };

  const handlePetsAllowed = (event) => {
    let newPet = !petsAllowed;
    if (event.target.value) setPetsAllowed(newPet);
    //console.log(newPet);
    form.pets_allowed = newPet;
  };

  return (
    <Box w="100%" maxW="1140px">
      <Text fontSize="28px" fontWeight="bold" mb="20px">
        Create listing property
      </Text>
      <Text fontSize="24px" fontWeight="bold">
        Listing information
      </Text>

      <form onSubmit={handleSubmit}>
        <FormControl>
          <Box mt="16px" mb="20px">
            <FormLabel fontWeight="bold">Operation type</FormLabel>
            <OperationType getValue={(val) => (form.operation_type = val)} />
            <Text fontSize="14px" color="#718096">
              Are you looking to rent or sell this property?
            </Text>
          </Box>

          <Box mb="20px">
            <FormLabel htmlFor="addres" fontWeight="bold">
              Addres
            </FormLabel>
            <Input
              id="addres"
              size="sm"
              w="392px"
              onChange={handleChange}
              value={form.addres}
              name="addres"
            />
          </Box>

          <Box mb="20px">
            <FormLabel htmlFor="monthly_rent" fontWeight="bold">
              Monthly rent
            </FormLabel>
            <Input
              id="monthly_rent"
              size="sm"
              w="392px"
              onChange={handleChange}
              value={form.monthly_rent}
              name="monthly_rent"
            />
          </Box>

          <Box mb="20px">
            <FormLabel htmlFor="maintenance" fontWeight="bold">
              Maintenance
            </FormLabel>
            <Input
              id="maintenance"
              size="sm"
              w="392px"
              onChange={handleChange}
              value={form.maintenance}
              name="maintenance"
            />
            <Text fontSize="14px" color="#718096">
              Amount paid to the building for maintenance.
            </Text>
          </Box>

          <Box mb="20px">
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
              <Radio variantColor="teal" value="apartment" size="sm">
                Apartment
              </Radio>
              <Radio variantColor="teal" value="house" size="sm">
                House
              </Radio>
            </RadioGroup>
          </Box>

          <Box d="flex" mb="20px">
            <Box mr="12px">
              <FormLabel htmlFor="bedrooms" fontWeight="bold">
                Bedrooms
              </FormLabel>
              <Select
                id="bedrooms"
                placeholder="Select option"
                size="sm"
                w="200px"
                name="bedrooms"
                onChange={handleChange}
                value={form.bedrooms}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
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
                name="bathrooms"
                onChange={handleChange}
                value={form.bathrooms}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </Box>

            <Box>
              <FormLabel htmlFor="area" fontWeight="bold">
                Area (m<sup>2</sup>)
              </FormLabel>
              <InputGroup size="sm" w="200px">
                <Input
                  id="area"
                  onChange={handleChange}
                  value={form.area}
                  name="area"
                />
                <InputRightAddon
                  children={
                    <p>
                      m<sup>2</sup>
                    </p>
                  }
                />
              </InputGroup>
            </Box>
          </Box>

          <Text fontSize="24px" fontWeight="bold" mb="18px">
            Amenities
          </Text>

          <Box mb="20px">
            <FormLabel fontWeight="bold">Apartment amenities</FormLabel>
            <CheckboxGroup
              isInline
              spacing={4}
              variantColor="teal"
              size="sm"
              mb="14px"
              //defaultValue={["TV", "Dishwasher"]}
              //onChange={val => console.log(val)}
              onChange={(val) => (form.apartment_amenities = val)}
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
            <CheckboxGroup
              isInline
              spacing={4}
              variantColor="teal"
              size="sm"
              mb="14px"
              onChange={(val) => (form.building_amenities = val)}
            >
              <Checkbox value="Parking spot">Parking spot</Checkbox>
              <Checkbox value="Park">Park</Checkbox>
              <Checkbox value="Child pool">Child pool</Checkbox>
              <Checkbox value="Pool">Pool</Checkbox>
              <Checkbox value="24/7 surveillance">24/7 surveillance</Checkbox>
              <Checkbox value="Access Control">Access Control</Checkbox>
              <Checkbox value="Dog park">Dog park</Checkbox>
            </CheckboxGroup>

            <FormLabel fontWeight="bold">Close by</FormLabel>
            <CheckboxGroup
              isInline
              spacing={4}
              variantColor="teal"
              size="sm"
              onChange={(val) => (form.close_by = val)}
            >
              <Checkbox value="Supermarket">Supermarket</Checkbox>
              <Checkbox value="Minimarket">Minimarket</Checkbox>
              <Checkbox value="Ramen restaurant">Ramen restaurant</Checkbox>
              <Checkbox value="Restaurants">Restaurants</Checkbox>
              <Checkbox value="Child school">Child school</Checkbox>
              <Checkbox value="University">University</Checkbox>
              <Checkbox value="Park">Park</Checkbox>
              <Checkbox value="Dog school">Dog school</Checkbox>
            </CheckboxGroup>
          </Box>

          <Box mb="20px">
            <FormLabel fontWeight="bold" htmlFor="pets">
              Pets allowed
            </FormLabel>
            <Switch
              id="pets"
              color="teal"
              size="sm"
              onChange={handlePetsAllowed}
              defaultIsChecked
              // name="pets_allowed"
              value={petsAllowed}
            />
            <Text fontSize="14px" color="#718096" w="485px">
              Allowing pets increases the likehood of renters liking the
              property by 9001%. It also makes you a better person.
            </Text>
          </Box>

          <Text fontSize="24px" fontWeight="bold" mb="16px">
            About the property
          </Text>

          <Box mb="20px">
            <FormLabel fontWeight="bold" htmlFor="description">
              Description
            </FormLabel>
            <Textarea
              id="description"
              w="620px"
              size="sm"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
            <Text fontSize="14px" color="#718096">
              Renters will read this first, so highlight any features or
              important information the apartment has.
            </Text>
          </Box>

          {/* <FormLabel fontWeight="bold">Photos</FormLabel>
        <input type="file" name="image" accept="image/*" /> */}

          <Button
            type="submit"
            variantColor="teal"
            bg="#4FD1C5"
            variant="solid"
            size="sm"
          >
            Publish Listing
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default CreatePropertyForm;
