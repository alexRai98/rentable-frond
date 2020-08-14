import React from "react";
import { Flex, Box, Divider, Image } from "@chakra-ui/core";
import logo from "../../images/Logo.svg";
import mail from "../../images/mail.svg";
import phone from "../../images/phone.svg";
import fb from "../../images/fb.svg";
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import {
  TextFooter,
  A,
  ContainerFooter,
  TitleFooter,
  LinkFooter,
} from "./layoutStyled";

function Footer() {
  return (
    <ContainerFooter>
      <Flex w="100%" maxW="1140px" mx="auto" my={["40px", "58px"]}>
        <Box mr="180px">
          <Image src={logo} alt="logo" mb="24px" />
          <A>
            <Image src={mail} mr="8px" /> info@getthathome.com
          </A>
          <A>
            <Image src={phone} mr="8px" /> +51 988 345 542
          </A>
          <Flex>
            <a href="https://facebook.com"  target="_black">
              {" "}
              <Image src={fb} alt="fant page" mr="9px" />
            </a>
            <a href="https://instagram.com" target="_black">
              {" "}
              <Image src={instagram} alt="fant page" mr="9px" />
            </a>
            <a href="https://twitter.com" target="_black">
              {" "}
              <Image src={twitter} alt="fant page" />
            </a>
          </Flex>
        </Box>
        <Flex maxW="606px" w="100%" justifyContent="space-between">
          <Flex direction="column">
            <TitleFooter>Company</TitleFooter>
            <LinkFooter>About</LinkFooter>
            <LinkFooter>Careers</LinkFooter>
            <LinkFooter>Contact</LinkFooter>
            <LinkFooter>Legal</LinkFooter>
          </Flex>
          <Flex direction="column">
            <TitleFooter>Home seekers</TitleFooter>
            <LinkFooter>Rent Aparments</LinkFooter>
            <LinkFooter>Rent Houses</LinkFooter>
            <LinkFooter>Buy Aparments</LinkFooter>
            <LinkFooter>Buy Houses</LinkFooter>
          </Flex>
          <Flex direction="column">
            <TitleFooter>Landlords</TitleFooter>
            <LinkFooter>How it works</LinkFooter>
            <LinkFooter>Publish property</LinkFooter>
            <LinkFooter>Contact</LinkFooter>
          </Flex>
        </Flex>
      </Flex>
      <Divider borderColor="#A0AEC0" />
      <TextFooter>
        Build by{" "}
        <a href="https://github.com/" target="_black">
          Marvin
        </a>{" "}
        {"&"}{" "}
        <a href="https://github.com/" target="_black">
          Rai
        </a>{" "}
      </TextFooter>
    </ContainerFooter>
  );
}

export default Footer;
