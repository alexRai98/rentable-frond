import React from "react";
import { Box, Input, FormLabel, Text } from "@chakra-ui/core";
import { useField } from "formik";

const InputTextField = ({ label, text, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Box mb="30px">
      <FormLabel htmlFor={label} fontWeight="bold">
        {label}
      </FormLabel>
      <Input {...field} {...props} id={label} size="sm" w="392px" />
      {meta.touched && meta.error ? (
        <Box color="#E53E3E">{meta.error}</Box>
      ) : null}
      <Text fontSize="14px" color="#718096">
        {text}
      </Text>
    </Box>
  );
};

export default InputTextField;
