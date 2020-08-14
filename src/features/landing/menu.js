import React from "react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/core";

function MenuSearch({ title }) {
  return (
    <Menu>
      <MenuButton
        fontFamily="Oxygen"
        fontWeight="normal"
        fontStyle="normal"
        bg="tranparent"
        color="#435266"
        as={Button}
        rightIcon="chevron-down"
        pl="0px"
        w="129px"
        justifyContent="space-between"
        variantColor="#85909F"
      >
        {title}
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem as="a" href="#">
          Attend a Workshop
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MenuSearch;
