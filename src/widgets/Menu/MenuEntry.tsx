import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean }>`
  transition: color 0.4s;
  padding-left:15px;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font-size: ${({ secondary }) => (secondary ? "25px" : "30px")};
  background-color:transparent;
  color: ${({ theme }) => theme.colors.textSubtle};
  box-shadow: ${({ isActive, theme }) => (isActive ? `inset 4px 0px 0px ${theme.colors.primary}` : "none")};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ theme }) => theme.colors.textSubtle};
  }

  &:hover {
    a{
      color:black;
    }
    svg{
      fill:black;
    }
    background-color: #b7b7b7;
    color:black;
  }
  &:focus{
    a{
      color:black;
    }
    svg{
      fill:black;
    }
    background-color:white;
    color:black;
  }
  &:active{
    a{
      color:white;
    }
    svg{
      fill:white;
    }
    background-color:transparent;
    color:white;
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntry, LinkLabel };
