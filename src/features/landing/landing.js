import React, { useEffect } from "react";
import Search from "./search";
import { Image, Text, Button, Flex } from "@chakra-ui/core";
import illustration from "../../images/Illustration.svg";
import house from "../../images/house.svg";
import {
  Hero,
  Title,
  SubTitle,
  TitleSection,
  RectangleYellow,
} from "./landingStiled";
import { Link } from "react-router-dom";
import PropertyCard from "../properties/propertyCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProperties } from "../../services/api";
import depa from "../../images/depa.jpg";
import lastDepa from "../../images/depa1.jpg";

function Landing() {
  const images = [
    "https://media-cdn.tripadvisor.com/media/photo-s/02/4c/63/01/hall-main-entrance.jpg",
    depa,
    "https://s3.amazonaws.com/assets.moveglobally.com/property_images/880958/13270622/EB-CJ0958.jpg?1542503411",
    lastDepa,
  ];
  const properties = useSelector((state) => state.properties.items);
  const newProperties = properties.slice(0,3);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <>
      <Hero>
        <Title>Meet your new home</Title>
        <SubTitle>The easiest way to find where you belong</SubTitle>
        <Image
          src={illustration}
          position="absolute"
          top="0"
          left="0"
          zIndex="-1"
        />
        <Search />
      </Hero>
      <Flex
        pt="104px"
        pb="75px"
        px="23px"
        mb="25px"
        w="100%"
        maxW="763px"
        flexDirection="column"
        alignItems="center"
      >
        <Text color="#8A8A97" fontSize="19px" fontFamily="Work Sans">
          Find an Apartment You Love
        </Text>
        <RectangleYellow />
        <TitleSection>Homes for rent at the best prices</TitleSection>
      </Flex>
      <Flex
        height="384px"
        marginTop="80px"
        w="1200px"
        justifyContent="space-between"
      >
        {newProperties.map((property,index) => (
          <Link to={`/property/${property.id}`}  key={property.id}>
            <PropertyCard
              price={property.monthly_rent}
              addres={property.addres}
              bed={property.bedrooms}
              bath={property.bathrooms}
              area={property.area}
              image={images[index]}
            />
          </Link>
        ))}
      </Flex>
      <Flex
        p="100px 216px"
        background="#F7FBFD"
        flexDirection="column"
        alignItems="center"
      >
        <TitleSection>
          Getting someone to rent your apartment has never been this easy
        </TitleSection>
        <Link to="/sign-up">
          <Button
            variant="solid"
            variantColor="purple"
            size="md"
            marginTop="24px"
          >
            Create an account now
          </Button>
        </Link>
      </Flex>
      <Flex my="100px" w="100%" maxW="1111px" justifyContent="space-between">
        <Image src={house} />
        <Flex alignSelf="center" flexDirection="column">
          <Text fontSize="28px" fontFamily="Oxigen">
            Check the best priced properties in the town
          </Text>
          <Button
            variantColor="teal"
            bg="#4FD1C5"
            variant="solid"
            size="md"
            w="258px"
            mt="17px"
          >
            Find a home
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;
