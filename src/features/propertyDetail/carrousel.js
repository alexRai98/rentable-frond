import React, { useState } from "react";
import { Box, IconButton, Flex } from "@chakra-ui/core";
import { ContainerCarrousel, ImageProperty } from "./propertyStiled";
import image1 from '../../images/image1.jpg'
import image2 from '../../images/image2.jpg'

export default function Carrousel() {
  const images = [image1,image2]
  const [image,setImage] = useState({
    image: images[0],
    index: 0,
  })

  const hundlerIncreasing =()=>{
    let index = image.index + 1;
    if(index > images.length-1 ){
      index = 0;
    }
    setImage({
      image:images[index],
      index:index
    })
  }

  const hundlerDecreasing =()=>{
    let index = image.index - 1;
    if(index < 0 ){
      index = images.length-1 ;
    }
    setImage({
      image:images[index],
      index:index
    })
  }

  return (
    <ContainerCarrousel>
      <Flex pl="16px" alignItems="center">
        <IconButton
          variantColor="teal"
          aria-label="arrow left"
          icon="chevron-left"
          isRound={true}
          bg="teal.300"
          fontSize="32px"
          onClick={hundlerDecreasing}
        />
      </Flex>
      <Box> 
        <ImageProperty src={image.image} />
      </Box>
      <Flex pr="16px" alignItems="center" justifyContent="flex-end">
        <IconButton
          variantColor="teal"
          aria-label="arrow right"
          icon="chevron-right"
          isRound={true}
          bg="teal.300"
          fontSize="32px"
          onClick={hundlerIncreasing}
        />
      </Flex>
    </ContainerCarrousel>
  );
}
