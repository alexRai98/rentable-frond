import React, { useState, useEffect } from "react";
import { Input, Box } from "@chakra-ui/core";
import ListResults from "./listResul";

function InputSearch({setFormSearch,formSearch}) {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  async function searchPlaces(city) {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?limit=5&access_token=pk.eyJ1IjoiYWxleGRlbGdhZG8iLCJhIjoiY2tlZGxiMW5rMDIzajJzb3p3OGFnN2t3cCJ9.-OspwPUhiJvBmJk2lrDQ7g`
    );
    const data = await response.json();
    setResults(data.features);
    return data.features;
  }
  useEffect(() => {
    searchPlaces(input);
  }, [input,results]);

  const hundlerChange = (event) => {
    setInput(event.target.value);
  };

  const hundlerClick =(addrees)=>{
    setFormSearch({
      ...formSearch, address:addrees
    })
  }
  return (
    <Box>
      <Input
        value={input}
        type="text"
        border="none"
        placeholder="Santiago de Surco"
        w="395px"
        _focus={{ outline: "none" }}
        pl="0px"
        onChange={hundlerChange}
      />
      {results && <ListResults results={results} onClick={hundlerClick} setInput={setInput}/>}
    </Box>
  );
}

export default InputSearch;
