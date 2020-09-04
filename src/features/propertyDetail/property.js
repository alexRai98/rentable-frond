import React from "react";
import { Box, Button, Flex, Divider, Image, Text } from "@chakra-ui/core";
import {
  Container,
  Card,
  LinkTo,
  Title,
  SubTitle,
  Place,
  TitleSection,
} from "./propertyStiled";
import iconPet from "../../images/pet.svg";
import iconArea from "../../images/area_purple.svg";
import iconBathroom from "../../images/bathroom.svg";
import iconBedroom from "../../images/bedroom.svg";
import ListAmenities from "./listAmenities";
import Map from "./map";
import Carrousel from "./carrousel";

export default function Property() {
  const areasPlace = [
    {
      icon: iconBedroom,
      text: "2 Bedrooms",
    },
    {
      icon: iconBathroom,
      text: "2 Bathrooms",
    },
    {
      icon: iconArea,
      text: "60 m2",
    },
    {
      icon: iconPet,
      text: "Pets Allowed",
    },
  ];
  const amenities = {
    aparment: [
      "Washing machine",
      "Washing machine",
      "Washing machine",
      "Washing machine",
    ],
    building: [
      "Barbecue",
      "Child pool",
      "Access Control",
      "Access Control",
      "Access Control",
    ],
    close: ["Supermarket", "University", "Ramen Restaurant", "Washing machine"],
  };
  return (
    <Container>
      <Box>
        <Carrousel />
        <Flex justifyContent="space-between">
          <Title>Francisco de Paula Ugarriza 27</Title>
          <Title>S/ 1000</Title>
        </Flex>
        <Flex justifyContent="space-between" mt="4px" mb="20px">
          <SubTitle>Miraflores, Lima</SubTitle>
          <SubTitle>+ S/ 100</SubTitle>
        </Flex>
        <Divider borderColor="#718096" />
        <Flex justifyContent="space-between" my="22px">
          {areasPlace.map((area) => (
            <Place key={area.text}>
              <Image src={area.icon} mr="13px" />
              {area.text}
            </Place>
          ))}
        </Flex>
        <Divider borderColor="#718096" />
        <TitleSection>About this place</TitleSection>
        <Text style={{ lineHeight: "50px" }}>
          3 Bedroom/2 Bathroom apartment available for ASAP move-in!
          <br /> Apartment features hardwood floors throughout, virtual doorman,
          Central AC/heat, dishwasher and a microwave. <br /> The kitchen has
          custom cabinetry and the living room is big enough to fit a dinner
          table, a couch and a tv set up.
        </Text>
        <Divider borderColor="#718096" />
        <TitleSection>Amenities</TitleSection>
        <ListAmenities amenities={amenities} />
        <Divider borderColor="#718096" />
        <TitleSection>Location</TitleSection>
        <Text color="#718096" my="8px" fontWeight="bold" fontSize="14px">
          Francisco de Paula Ugarriza 27, Miraflores, Lima
        </Text>
        <Map />
      </Box>
      <Box>
        <Card>
          <Button
            variantColor="teal"
            bg="#4FD1C5"
            variant="solid"
            size="lg"
            mb="12px"
          >
            Contact advertiser
          </Button>
          <LinkTo to="/">
            Favorited
            <i
              style={{ color: "red", marginLeft: "10px" }}
              className="fas fa-heart"
            ></i>
            <i style={{ marginLeft: "10px" }} className="far fa-heart"></i>
          </LinkTo>
        </Card>
      </Box>
    </Container>
  );
}
