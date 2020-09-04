import React from "react";
import { Stack } from "@chakra-ui/core";
import { Option } from "./landingStiled";

export default function ListResult({ results }) {

  const hundlerClick = (value) => {
    console.log(value);
  };
  return (
    <Stack spacing={2} bg="#ffffff" position="absolute" w="">
      {results.map((value) => (
        <Option key={value.id} onClick={()=>hundlerClick(value.place_name)}>
          {value.place_name}
        </Option>
      ))}
    </Stack>
  );
}
