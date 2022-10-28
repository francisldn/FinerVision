import styled from 'styled-components';

export const FormFieldLabel = styled.label`
    display:flex;
    flex-direction:column;
    font-weight: 800;
    font-size: 1rem;
    margin-left: 15px;
    margin-top:10px;
    color: #2a2a2a;
    width: 100%;
`

export const FormFieldInput = styled.input`
    box-shadow: inset 2px 2px 6px 2px rgb(0,0,0,0.3);
    margin:5px 5px 5px 0px;
    border-radius: 10px;
    border-style:inset;
    border-width: 2px;
    height: ${({height})=> height || "38px"};
    border-color: rgb(0,0,0,0.2); 
    width: ${({width}) => width};
    min-width: 9rem;
    padding-left: 8px;
    font-size: medium;
    box-sizing: border-box;
`