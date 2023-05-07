import styled from "@emotion/styled";
import { border, color, margin, padding, variant, width, css } from "styled-system";

const Button = styled.button`
  
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  outline: none;
  border: none;

  ${padding}
  ${color}
  ${border}
  ${margin}
  ${width}
  /* variants */
  ${variant({
    variants: {
      primary: {
        backgroundColor: "#e7c1c8",
      },
      secondary: {
        backgroundColor: "green",
      },
      tertiary: {
        backgroundColor: "#c1e7e0",
      },
      cancel: {
        backgroundColor: "red",
      },
    },
  })}
`;

export default Button;
