import stiled from "@emotion/styled";
import { Text, Divider } from "@chakra-ui/core";

export const Hero = stiled.section`
    height: 544px;
`;

export const Title = stiled.h1`
    font-family: Oxygen;
    font-size: 48px;
    line-height: 52px;
    text-align: center;
    color: #424174;
    margin-top: 52px;
    margin-bottom: 14px;
`;

export const SubTitle = stiled.h2`
    font-family: Work Sans;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
    color: #718096;
    margin-bottom:60px;
`;

export const TitleSection = stiled.h3`
    font-family: Work Sans;
    font-size: 39px;
    line-height: 50px;
    text-align: center;
    color: #424174;
`;

export const RectangleYellow = stiled.div`
    background: #FFC252;
    width: 30px;
    height: 5px;
    margin-top:16px;
    margin-bottom: 20px;
`

export const TextSearch = stiled(Text)`
    font-size :11px;
    color: #85909F;

`;
export const DeviderSearch = stiled(Divider)`
    border-color: #A0AEC0;
`;

export const Option = stiled.option`
    cursor: pointer;
    width: 395px;
    &:hover{
        background: #B2F5EA;
    }
`;
