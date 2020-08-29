import React from "react";
import {
  Select,
} from "@chakra-ui/core";

export default function SelectSearch({ options }) {
  return (

    <Select
      fontFamily="Oxygen"
      fontWeight="normal"
      fontStyle="normal"
      color="#435266"
      rightIcon="chevron-down"
      
      w="129px"
      justifyContent="space-between"
      variantColor="#85909F"
    >
      {options.map(option=>(
        <option bg="tranparent" value={option}>{option}</option>
      ))}
    </Select>
  );
}

