import React, { useEffect } from "react";
import PropertyCard from "./propertyCard";
import PropertySearch from "./propertySearch";
import { Grid } from "@chakra-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchProperties } from "../../services/api";

const PropertiesList = () => {
  const properties = useSelector((state) => state.properties.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, []);

  return (
    <>
      <PropertySearch />
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap="30px"
      >
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            price={property.monthly_rent}
            addres={property.addres}
            bed={property.bedrooms}
            bath={property.bathrooms}
            area={property.area}
          />
        ))}
      </Grid>
    </>
  );
};

export default PropertiesList;
