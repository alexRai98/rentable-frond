import React from "react";
import { Box } from "@chakra-ui/core";
import { Container, Title, SubTitle } from "./signupSyled";
import Card from "./card";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import SignupForm from "./formSignUp";
import Success from './success'

function SignUp() {
  const history = useHistory()

  return (
    <Container>
      <Box bg="#81E6D9" height="400px" textAlign="center" pt="80px">
        {history.location.pathname  && (
          <>
            <Title>Qué estas buscando?</Title>
            <SubTitle>Selecciona el perfil con el que te identificas</SubTitle>
          </>
        )}
      </Box>
      <Box height="318px">
        <Router>
          <Switch>
            <Route exact path="/sign-up" component={Card} />
            <Route exact path="/sign-up/:type" component={SignupForm} />
            <Route exact path="/sign-up/success/:type" component={Success} />
          </Switch>
        </Router>
      </Box>
    </Container>
  );
}

export default SignUp;
