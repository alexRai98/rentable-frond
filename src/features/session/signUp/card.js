/* @jsx jsx */
 // eslint-disable-next-line 
import { css, jsx } from "@emotion/core";
import React from "react";
import { Card, CardTitle, CardText, ContainerCar } from "./signupSyled";
import { Link } from "react-router-dom";
import logoLandlor from "../../../images/landlord.svg";
import logoHomeSeeker from "../../../images/homeSeeker.svg";

const CardItem = ({ logo, title, text, styled }) => {
  return (
    <Card
      css={css`
        ${styled}
      `}
    >
      <img src={logo} alt="logo" />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </Card>
  );
};

function CardContainer() {
  return (
    <ContainerCar>
      <Link to="/sign-up/Landlord">
        <CardItem
          logo={logoLandlor}
          title="Landlord"
          text="You want to rent or sell a home"
        />
      </Link>
      <Link to="/sign-up/HomeSeeker">
        <CardItem
          logo={logoHomeSeeker}
          title="Home seeker"
          text="You want to find a home"
          styled={"margin-left: 45px"}
        />
      </Link>
    </ContainerCar>
  );
}

export default CardContainer;
