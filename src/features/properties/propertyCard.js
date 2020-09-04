import React, {  } from 'react'
import {Box} from '@chakra-ui/core'
import {Card} from './propertyStyled'
import { ReactComponent as PetsIcon } from '../../images/pets.svg'
import { ReactComponent as BedIcon } from '../../images/bed.svg'
import { ReactComponent as BathIcon } from '../../images/bath.svg'
import { ReactComponent as AreaIcon } from '../../images/area.svg'

const PropertyCard = ({price, addres, bed, bath, area}) => {
  return (
    <Card>
      <Box>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/02/4c/63/01/hall-main-entrance.jpg"
          alt="property" 
        />
      </Box>
      <Box h="110px" d="flex" flexDirection="column" justifyContent="space-between" p="10px">
        <Box d="flex" justifyContent="space-between" alignItems="center">
          <p style={{fontSize: "24px", fontWeight: "bold"}}>S/ {price}</p>
          <PetsIcon/>
        </Box>
        <p style={{fontSize: "14px"}}>{addres}</p>
        <Box d="flex">
          <Box d="flex" justifyContent="space-between" alignItems="center" mr="12px">
            <BedIcon/>
            <p>{bed}</p>
          </Box>
          <Box d="flex" justifyContent="space-between" alignItems="center" mr="12px">
            <BathIcon/>
            <p>{bath}</p>
          </Box>
          <Box d="flex" justifyContent="space-between" alignItems="center" mr="12px">
            <AreaIcon/>
            <p>{area} m<sup>2</sup></p>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}

export default PropertyCard;