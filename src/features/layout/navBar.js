import React from "react";
import { Box, Button, ButtonGroup } from "@chakra-ui/core";
import logo from "../../images/Logo.svg";
import { ButtonLink } from "./layoutStyled";

function NavBar() {
  return (
    <Box
      d="flex"
      w="100%"
      maxW="1140px"
      justifyContent="space-between"
      height="86px"
      alignItems="center"
    >
      <img src={logo} alt={"logo"} />

      <ButtonGroup spacing="32px">
        <ButtonLink variantColor="teal" variant="ghost">
          Find Houses
        </ButtonLink>
        <ButtonLink variantColor="teal" variant="ghost">
          Find Apartments
        </ButtonLink>
        <Button borderColor="#4FD1C5" color="#4FD1C5" variant="outline" size="sm">
          Join
        </Button>
        <Button variantColor="teal" bg="#4FD1C5" variant="solid" size="sm">
          Login
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default NavBar;
