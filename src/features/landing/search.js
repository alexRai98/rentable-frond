import React from "react";
import { Box, Button } from "@chakra-ui/core";
import SelectSearch from "./selectSearch";
import { TextSearch, DeviderSearch } from "./landingStiled";
import Input from "./inputSearch";

function Search() {
  return (
    <Box d="flex" p={5} shadow="md" borderWidth="1px" flex="1" rounded="15px">
      <Box>
        <TextSearch>I'm Looking For</TextSearch>
        <SelectSearch options={["An Apartment","A House"]} />
      </Box>
      <DeviderSearch orientation="vertical" />
      <Box>
        <TextSearch>I want to</TextSearch>
        <SelectSearch options={["Rent","Buy"]} />
      </Box>
      <DeviderSearch orientation="vertical" />
      <Box>
        <TextSearch>I want to</TextSearch>
        <Input />
      </Box>
      <DeviderSearch orientation="vertical" />
      <Button
        variantColor="teal"
        bg="#4FD1C5"
        variant="solid"
        size="md"
        w="135px"
        alignSelf="center  "
      >
        Search
      </Button>
    </Box>
  );
}

export default Search;
