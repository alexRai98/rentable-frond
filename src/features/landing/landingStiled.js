import stiled from '@emotion/styled'
import {Text,Divider } from "@chakra-ui/core";

const TextSearch= stiled(Text)`
    font-size :11px;
    color: #85909F;

`
const DeviderSearch = stiled(Divider)`
    border-color: #A0AEC0;
`

const Option = stiled.option`
    cursor: pointer;
    width: 395px;
    &:hover{
        background: #2222;
    }
`

export {TextSearch,DeviderSearch,Option}