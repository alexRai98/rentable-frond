import React from "react";
import { Input } from "@chakra-ui/core";

function InputSearch() {
  return (
    <Input
      type="text"
      aria-describedby="text-helper-text"
      border="none"
      placeholder="Santiago de Surco"
      w="395px"
      mr="126px"
    />
  );
}

export default InputSearch;
