import React from "react";
import {
  Box,
  FormLabel,
  Text,
  Button,
  RadioButtonGroup,
} from "@chakra-ui/core";

// Step 1: Create a component that accepts `isChecked` and `isDisabled` prop
const CustomRadio = React.forwardRef((props, ref) => {
  const { isChecked, value, ...rest } = props;
  return (
    <Button
      size="sm"
      borderRadius="none"
      border="1px solid gray"
      ref={ref}
      variantColor={isChecked ? "teal" : "gray"}
      aria-checked={isChecked}
      role="radio"
      {...rest}
    />
  );
});

// Step 2: Add `CustomRadio` as children of `RadioButtonGroup`
function OperationType({ operationType, setOperationType }) {
  const handleOperationType = (val) => {
    setOperationType(val);
  };

  return (
    <Box mt="16px" mb="30px">
      <FormLabel fontWeight="bold">Operation type</FormLabel>

      <RadioButtonGroup
        defaultValue={operationType}
        // onChange={(val) => console.log(val)}
        onChange={handleOperationType}
        display="flex"
      >
        <CustomRadio value="sell">Sell</CustomRadio>
        <CustomRadio value="rent">Rent</CustomRadio>
      </RadioButtonGroup>

      <Text fontSize="14px" color="#718096">
        Are you looking to rent or sell this property?
      </Text>
    </Box>
  );
}

export default OperationType;
