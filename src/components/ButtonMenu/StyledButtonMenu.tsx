import styled, { DefaultTheme } from "styled-components";
import { Variants, variants } from "../Button/types";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  display: inline-flex;
  background-color:transparent;

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
