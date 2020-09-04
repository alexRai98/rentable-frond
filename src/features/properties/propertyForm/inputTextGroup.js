import React from "react";
import {
  Box,
  FormLabel,
  InputGroup,
  Input,
  InputRightAddon,
} from "@chakra-ui/core";
import { useField } from "formik";

const InputTextGroup = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Box>
      <FormLabel htmlFor={label} fontWeight="bold">
        {label} (m<sup>2</sup>)
      </FormLabel>
      <InputGroup size="sm" w="200px">
        <Input
          id={label}
          {...field}
          // onChange={handleChange}
          // value={form.area}
          //name="area"
        />
        <InputRightAddon
          children={
            <p>
              m<sup>2</sup>
            </p>
          }
        />
      </InputGroup>
      {meta.touched && meta.error ? (
        <Box color="#E53E3E">{meta.error}</Box>
      ) : null}
    </Box>
  );
};

export default InputTextGroup;
