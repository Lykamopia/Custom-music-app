import styled from "@emotion/styled";
import { border, color, height, margin, padding, variant, width } from "styled-system";

const Button = styled.button`
  
  font-size: 16px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
&:hover{
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.603);
}
  ${padding}
  ${color}
  ${border}
  ${margin}
  ${width}
  ${height}

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
