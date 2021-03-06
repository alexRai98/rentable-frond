import React from "react";
import { Select } from "@chakra-ui/core";

export default function SelectSearch({ options, setFormSearch, formSearch }) {
  const hundlerChange = (e)=>{
    console.log(e)
  }
  return (
    <Select
      fontFamily="Oxygen"
      fontWeight="normal"
      fontStyle="normal"
      color="#435266"
      rightIcon="chevron-down"
      pl="0px"
      border="none"
      w="135px"
      justifyContent="space-between"
      variantColor="#85909F"
      onChange={hundlerChange}
      _focus={{ outline: "none" }}
    >
      {options.map((option) => (
        <option key={option} bg="tranparent" value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
