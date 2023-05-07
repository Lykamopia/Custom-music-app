import styled from "@emotion/styled";
import { background, margin, width } from "styled-system";

const LoaderStyle = styled.div`
border-radius: 10px;
height: 30vh;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(248, 248, 248, 0.342);
${margin}
${width}
`

export default LoaderStyle;