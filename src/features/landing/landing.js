import React from "react";
import Search from "./search";
import { Image, Box, Text, Button, Flex } from "@chakra-ui/core";
import illustration from "../../images/Illustration.svg";
import house from "../../images/house.svg";
import {
  Hero,
  Title,
  SubTitle,
  TitleSection,
  RectangleYellow,
} from "./landingStiled";

function Landing() {
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
        <Box height="384px" bg="#B2F5EA" marginTop="80px" w="100%"></Box>
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
        <Button
          variant="solid"
          variantColor="purple"
          size="md"
          marginTop="24px"
        >
          Create an account now
        </Button>
      </Flex>
      <Flex my="100px" w="100%" maxW="1111px" justifyContent="space-between">
        <Image src={house} />
        <Flex alignSelf="center" flexDirection="column">
          <Text fontSize="28px" fontFamily="Oxigen">Check the best priced properties in the town</Text>
          <Button variantColor="teal" bg="#4FD1C5" variant="solid" size="md" w="258px" mt="17px">
            Find a home
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Landing;
