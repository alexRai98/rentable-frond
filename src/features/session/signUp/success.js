/* @jsx jsx */
// eslint-disable-next-line 
import { css, jsx } from "@emotion/core";
import React from "react";
import logoSuccess from "../../../images/success.svg";
import { Button, Image } from "@chakra-ui/core";
import { TitleForm, ContainerForm } from "./signupSyled";
import { useParams } from "react-router-dom";
function Success() {
  const { type } = useParams();
  return (
    <ContainerForm
      css={css`
        top: 40%;
      `}
    >
      <Image src={logoSuccess} alt="logo success" mb="32px" />
      <TitleForm>Your account has been created</TitleForm>
      <Button variantColor="teal" bg="#4FD1C5" variant="solid" size="lg">
        {type === "landlord"
          ? "Create your first property listing"
          : "Find a home"}
      </Button>
    </ContainerForm>
  );
}

export default Success;
