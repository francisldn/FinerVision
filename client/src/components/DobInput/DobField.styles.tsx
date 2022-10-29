import styled from 'styled-components';
import { FormFieldLabel } from '../FormField/FormField.styles';

export const Flex = styled.div`
    display:flex;
`

export const DobFieldLabel = FormFieldLabel

export const DobFieldInput = styled.input`
    box-shadow: inset 2px 2px 6px 2px rgb(0,0,0,0.3);
    margin:5px 5px 5px 0px;
    border-radius: 10px;
    border-style:inset;
    border-width: 2px;
    height: ${({height})=> height || "38px"};
    border-color: rgb(0,0,0,0.2); 
    width: ${({width}) => width};
    min-width: 3rem;
    box-sizing: border-box;
    padding-left: 8px;
    font-size: small;
`