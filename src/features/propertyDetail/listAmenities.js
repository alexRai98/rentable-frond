import React from "react";
import { List, ListItem ,Flex,ListIcon} from "@chakra-ui/core";
import { TitleAmenitie } from "./propertyStiled";

export default function ListAmenities({ amenities }) {
  return (
    <Flex mt="18px" mb="20px">
      <List spacing={3} mr="120px">
        <TitleAmenitie>Aparment</TitleAmenitie>
        {amenities.aparment.map((amenitie) => (
          <ListItem fontSize="14px">
            <ListIcon icon="check-circle" color="teal.300" size="12px"/>
            {amenitie}
          </ListItem>
        ))}
      </List>
      <List spacing={3} mr="120px">
        <TitleAmenitie>Building</TitleAmenitie>
        {amenities.building.map((amenitie) => (
          <ListItem fontSize="14px">
            <ListIcon icon="check-circle" color="teal.300" size="12px"/>
            {amenitie}
          </ListItem>
        ))}
      </List>
      <List spacing={3}>
        <TitleAmenitie>Close</TitleAmenitie>
        {amenities.close.map((amenitie) => (
          <ListItem fontSize="14px">
            <ListIcon icon="check-circle" color="teal.300" size="12px"/>
            {amenitie}
          </ListItem>
        ))}
      </List>
    </Flex>
  );
}
