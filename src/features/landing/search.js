import React, { useState } from "react";
import { Box, Button, Flex } from "@chakra-ui/core";
import SelectSearch from "./selectSearch";
import { TextSearch, DeviderSearch } from "./landingStiled";
import Input from "./inputSearch";

function Search() {
  const [formSearch, setFormSearch] = useState({
    address: "",
    looking: "house",
    want: "rent",
  });
  const hundlerSubmit = () => {
    console.log(formSearch);
  };
  return (
      <Flex
        p={5}
        shadow="md"
        borderWidth="1px"
        rounded="15px"
        border="1px solid #D9D9D9"
      >
        <Box>
          <TextSearch>I'm Looking For</TextSearch>
          <SelectSearch
            options={["An Apartment", "A House"]}
            setFormSearch={setFormSearch}
            formSearch={formSearch}
          />
        </Box>
        <DeviderSearch orientation="vertical" />
        <Box>
          <TextSearch>I want to</TextSearch>
          <SelectSearch
            options={["Rent", "Buy"]}
            setFormSearch={setFormSearch}
            formSearch={formSearch}
            />
        </Box>
        <DeviderSearch orientation="vertical" />
        <Box>
          <TextSearch>I want to</TextSearch>
          <Input setFormSearch={setFormSearch} formSearch={formSearch}/>
        </Box>
        <DeviderSearch orientation="vertical" />
        <Button
          variantColor="teal"
          bg="#4FD1C5"
          variant="solid"
          size="md"
          w="135px"
          alignSelf="center  "
          onClick={hundlerSubmit}
        >
          Search
        </Button>
      </Flex>
  );
}

export default Search;
