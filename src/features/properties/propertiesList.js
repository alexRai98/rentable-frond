import React from "react";
import PropertyCard from "./propertyCard";
import PropertySearch from "./propertySearch";
import { Grid } from "@chakra-ui/core";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import depa from "../../images/depa.jpg";
import lastDepa from "../../images/depa1.jpg";

const PropertiesList = () => {
  const properties = useSelector((state) => state.properties.items);

  const images = [
    "https://media-cdn.tripadvisor.com/media/photo-s/02/4c/63/01/hall-main-entrance.jpg",
    depa,
    "https://s3.amazonaws.com/assets.moveglobally.com/property_images/880958/13270622/EB-CJ0958.jpg?1542503411",
    "https://d3rny71whgunfp.cloudfront.net/eyJidWNrZXQiOiJyZXNlbS1wZSIsImtleSI6IjE1OTI5MjUwODcyNjZfLTIxNTQ3MTIwMi5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo1MzEsImhlaWdodCI6MzUwLCJmaXQiOiJjb3ZlciIsIndpdGhvdXRFbmxhcmdlbWVudCI6dHJ1ZX19fQ==",
    lastDepa,
  ];

  return (
    <>
      <PropertySearch />
      <Grid
        templateColumns="repeat(3, 1fr)"
        templateRows="repeat(3, 1fr)"
        gap="30px"
      >
        {properties.map((property, index) => (
          <Link to={`/property/${property.id}`} key={property.id}>
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
      </Grid>
    </>
  );
};

export default PropertiesList;
