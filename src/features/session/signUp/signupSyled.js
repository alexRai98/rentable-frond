import styled from "@emotion/styled";
import { Box,Flex } from "@chakra-ui/core";

export const Container = styled(Box)`
  width: 100%;
  position: relative;
`;

export const Title = styled.h1`
  font-family: "Oxygen";
  font-size: 36px;
  color: #1d4044;
`;

export const SubTitle = styled.h2`
  font-family: Oxygen;
  font-size: 24px;
  color: #1d4044;
`;

export const ContainerCar = styled(Flex)`
  position: absolute;
  top: 244px;
  left: 413px;
`

export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  align-items:center;
  padding: 16px;
  cursor:pointer;
  &:hover{
    transform: scale(1.1)
  }
`;

export const CardTitle = styled.h3`
  font-family: Oxygen;
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  margin: 8px 0px 4px 0px;
`;

export const CardText = styled.p`
  font-family: Oxygen;
  font-size: 16px;
  line-height: 150%;
`;

