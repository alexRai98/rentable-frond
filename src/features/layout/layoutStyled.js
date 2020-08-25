import stiled from "@emotion/styled";
import { Button } from "@chakra-ui/core";

const ButtonLink = stiled(Button)`
    color: #000000;
    font-weight: normal;
    font-size: 16px;
    font-family: Work Sans;
`;

const ContainerFooter = stiled.footer`
 background-color : #F7FBFD;
 width : 100%;
`;

const TextFooter = stiled.p`
    color: #4A5568;
    font-family: Oxygen;
    font-size: 16px;
    text-align:center;
    a:hover{
        color: teal;
    }
`;

const A = stiled.a`
    display:flex;
    font-family: Work Sans;
    font-size: 14px;
    color: #4A5568;
    margin-bottom: 9px;
`;

const TitleFooter = stiled.h1`
    font-family: Work Sans;
    font-weight: normal;
    font-size: 20px;
    line-height: 16px;
    color: #4FD1C5;
    margin-bottom: 22px;
`;

const LinkFooter = stiled.a`
    font-family: Work Sans;
    font-size: 16px;
    line-height: 16px;
    color: #4A5568;
    margin-bottom: 12px;
    cursor:pointer; 
    &:hover{
        color:teal;
    }
`

export { ButtonLink, TextFooter, A, ContainerFooter ,TitleFooter,LinkFooter};
