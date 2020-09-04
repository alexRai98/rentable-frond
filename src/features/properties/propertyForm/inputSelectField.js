import React from "react";
import { Box, FormLabel, Select } from "@chakra-ui/core";
import { useField } from "formik";

const InputSelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Box mr="12px">
      <FormLabel htmlFor={label} fontWeight="bold">
        {label}
      </FormLabel>
      <Select
        {...field}
        id={label}
        placeholder="Select option"
        size="sm"
        w="200px"
        //name={label}
        // onChange={handleChange}
        // value={form.bedrooms}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Select>
      {meta.touched && meta.error ? (
        <Box color="#E53E3E">{meta.error}</Box>
      ) : null}
    </Box>
  );
};

export default InputSelectField;
