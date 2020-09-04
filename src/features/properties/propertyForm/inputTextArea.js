import React from "react";
import { Box, FormLabel, Textarea, Text } from "@chakra-ui/core";
import { useField } from "formik";

const InputTextArea = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Box mb="30px">
      <FormLabel fontWeight="bold" htmlFor="description">
        Description
      </FormLabel>
      <Textarea
        id="description"
        w="620px"
        size="md"
        name="description"
        {...field}
        //value={form.description}
        //onChange={handleChange}
      />
      {meta.touched && meta.error ? (
        <Box color="#E53E3E">{meta.error}</Box>
      ) : null}
      <Text fontSize="14px" color="#718096">
        Renters will read this first, so highlight any features or important
        information the apartment has.
      </Text>
    </Box>
  );
};

export default InputTextArea;
