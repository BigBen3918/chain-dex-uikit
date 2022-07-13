import styled from "styled-components";
import Button from "./Button";
import { ButtonProps } from "./types";

const IconButton = styled(Button) <ButtonProps>`
  padding: 0;
  margin:5px;
  background-color:transparent;
  color:white;
  cursor:pointer;
  width: ${({ size }) => (size === "sm" ? "32px" : "40px")};
`;

export default IconButton;
