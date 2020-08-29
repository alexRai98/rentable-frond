import React from "react";
import { Stack } from "@chakra-ui/core";
import { Option } from "./landingStiled";

export default function ListResult({ text }) {

  const hundlerClick = (value) => {
    console.log(value);
  };
  return (
    <Stack spacing={2} bg="#ffffff" position="absolute" w="">
      {[1, 2, 3, 4, 5].map((value) => (
        <Option key={value} onClick={()=>hundlerClick(value)}>
          {text}
        </Option>
      ))}
    </Stack>
  );
}
