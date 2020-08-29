import React, { useState } from "react";
import { Input, Box } from "@chakra-ui/core";
import ListResults from "./listResul";

function InputSearch() {
  const [input, setInput] = useState("");

  const hundlerChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Box>
      <Input
        type="text"
        border="none"
        placeholder="Santiago de Surco"
        w="395px"
        _focus={{ outline: "none" }}
        pl="0px"
        onChange={hundlerChange}
      />
      {input.length > 0 && <ListResults text={input} />}
    </Box>
  );
}

export default InputSearch;
