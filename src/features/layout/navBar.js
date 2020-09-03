import React from "react";
import { Box, Button, ButtonGroup, useDisclosure } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { ButtonLink } from "./layoutStyled";
import Login from "../session/login";
import { getUser , logOut} from "../session/sessionSlice";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const hundlerLogout = ()=>{
    dispatch(logOut())
  }
  return (
    <Box
      d="flex"
      w="100%"
      maxW="1140px"
      justifyContent="space-between"
      height="86px"
      alignItems="center"
    >
      <Link to="/">
        <img src={logo} alt={"logo"} />
      </Link>
      <ButtonGroup spacing="32px">
        {user ? (
          <>
            <ButtonLink variantColor="teal" variant="ghost" onClick={hundlerLogout}>
              Logout
            </ButtonLink>
            <Button
              variantColor="teal"
              bg="#4FD1C5"
              variant="solid"
              size="sm"
              onClick={onOpen}
            >
              Saved properties
            </Button>
          </>
        ) : (
          <>
            {" "}
            <ButtonLink variantColor="teal" variant="ghost">
              Find Houses
            </ButtonLink>
            <ButtonLink variantColor="teal" variant="ghost">
              Find Apartments
            </ButtonLink>
            <Link to="/sign-up">
              <Button
                borderColor="#4FD1C5"
                color="#4FD1C5"
                variant="outline"
                size="sm"
                mr="32px"
              >
                Join
              </Button>
            </Link>
            <Button
              variantColor="teal"
              bg="#4FD1C5"
              variant="solid"
              size="sm"
              onClick={onOpen}
            >
              Login
            </Button>
          </>
        )}
      </ButtonGroup>
      <Login isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default NavBar;
