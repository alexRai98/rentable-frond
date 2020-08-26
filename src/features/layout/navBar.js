import React from "react";
import { Box, Button, ButtonGroup,useDisclosure } from "@chakra-ui/core";
import logo from "../../images/Logo.svg";
import { ButtonLink } from "./layoutStyled";
import Login from '../session/login'

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Button variantColor="teal" bg="#4FD1C5" variant="solid" size="sm" onClick={onOpen}>
          Login
        </Button>
        <Login isOpen={isOpen} onClose={onClose} />
      </ButtonGroup>
    </Box>
  );
}

export default NavBar;