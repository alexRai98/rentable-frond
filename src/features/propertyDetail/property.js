import React from "react";
import {
  Box,
  Button,
  Flex,
  Divider,
  Image,
  Text,
  //useDisclosure,
} from "@chakra-ui/core";
import {
  Container,
  Card,
  // LinkTo,
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
import { useSelector } from "react-redux";
import { getProperties } from "../properties/propertiesSlice";
import { useParams } from "react-router-dom";
//import { getUser } from "../session/sessionSlice";
//import Login from "../session/login";

export default function Property() {
  // const [showDetail, setShowDetail] = useState(false);
 
  const { id } = useParams();
  const property = useSelector(getProperties).find(
    (prop) => prop.id === Number(id)
  );
  console.log(property)
  const areasPlace = [
    {
      icon: iconBedroom,
      text: `${property.bedrooms} Bedrooms`,
    },
    {
      icon: iconBathroom,
      text: `${property.bathrooms} Bathrooms`,
    },
    {
      icon: iconArea,
      text: `${property.area} m2`,
    },
    {
      icon: iconPet,
      text: `${property.pets_allowed? "Pets Allowed":"Pets Not Allowed"} `,
    },
  ];
  const amenities = {
    aparment: property.apartment_amenities,
    building: property.building_amenities,
    close: property.close_by,
  };
  return (
    <Container>
      <Box>
        <Carrousel />
        <Flex justifyContent="space-between">
          <Title>{property.addres}</Title>
          <Title>S/ {property.monthly_rent}</Title>
        </Flex>
        <Flex justifyContent="space-between" mt="4px" mb="20px">
          <SubTitle>Angamos, Piura</SubTitle>
          <SubTitle>+ S/ {property.maintenance}</SubTitle>
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
          {property.description}
        </Text>
        <Divider borderColor="#718096" />
        <TitleSection>Amenities</TitleSection>
        <ListAmenities amenities={amenities} />
        <Divider borderColor="#718096" />
        <TitleSection>Location</TitleSection>
        <Text color="#718096" my="8px" fontWeight="bold" fontSize="14px">
          {property.addres}, Peru
        </Text>
        <Map longitud={-80.63185} latitud={-5.181476} />
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
            Edit Property
          </Button>
        </Card>
      </Box>
    </Container>
  );
}

// const { isOpen, onOpen, onClose } = useDisclosure();

//const user = useSelector(getUser);

// const hubdlerShowContact = () => {
//   if (user) {
//     setShowDetail(true);
//   }
// };

/* <Card>
          {user.type === "Landlord" ? (
            <>
              <Button
                variantColor="teal"
                bg="#4FD1C5"
                variant="solid"
                size="lg"
                mb="12px"
              >
                Edit Property
              </Button>
            </>
          ) : (
            <>
              <Button
                variantColor="teal"
                bg="#4FD1C5"
                variant="solid"
                size="lg"
                mb="12px"
                onClick={hubdlerShowContact}
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
            </>
          )}
          {showDetail ? (
            <>
              <h3>Contact information</h3>
              <label>
                {" "}
                <strong>Email:</strong> bonnie@codeable.pe
              </label>
              <label>
                {" "}
                <strong>Phone number: </strong> 999 444 333
              </label>
            </>
          ) : (
            user.type === "HomeSeeker" && (
              <>
                <Text>Log in or Join to contact the advertiser</Text>
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
            )
          )}
        </Card> 
        <Login isOpen={isOpen} onClose={onClose} />
        */
