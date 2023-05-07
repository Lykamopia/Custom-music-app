import styled from "@emotion/styled";
import { margin } from "styled-system";

const Input = styled.input`
outline: none;
border: none;
width: 50%;
padding: 0.5rem;
margin: 1rem;
font-size: 1rem;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: rgb(62, 65, 71);
border-radius: 0.5rem;
background-color: aliceblue;

&:focus{
    border-radius: 0;
    border-bottom: 3px solid green;
    background-color: white;
}
${margin}
`
export default Input;