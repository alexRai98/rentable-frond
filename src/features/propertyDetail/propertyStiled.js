import styled from "@emotion/styled";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 843px) minmax(auto, 271px);
  gap: 0px 24px;
  font-family: Oxygen;
  margin-bottom: 69px;
`;
export const Card = styled(Box)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px 34px;
  text-align: center;
`;

export const LinkTo = styled(Link)`
  text-align: center;
  color: #319795;
  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 140%;
`;
export const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  color: #718096;
`;

export const Place = styled.span`
  display: flex;
  align-items: center;
  font-family: Work Sans;
  font-size: 24px;
  line-height: 150%;
  color: #6b46c1;
`;
export const TitleSection = styled.h2`
  color: #2d3748;
  font-weight: bold;
  margin-top: 20px;
  font-size: 20px;
`;

export const TitleAmenitie = styled.h3`
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;
  color: #4a5568;
  margin-bottom: 8px;
`;
 // Carrousel

 export const ContainerCarrousel = styled.div`
  display: grid;
  grid-template-columns: minmax(auto,117px) minmax(auto,609px) minmax(auto,117px);
  grid-template-rows: 450px;
  margin-bottom: 20px;
  background: #EDF2F7;
 `

