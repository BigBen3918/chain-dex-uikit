import React from "react";
import styled from "styled-components";
import SwapButton from "../Button/SwapButton";
import { sizes, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

type InactiveButtonProps = {
  colorKey: "primary" | "textSubtle";
} & ButtonMenuItemProps;

const InactiveButton = styled(SwapButton) <InactiveButtonProps>`
  background-color: transparent;
  border:none;
  height:50px;
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};

  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ButtonMenuItem: React.FC<ButtonMenuItemProps> = ({
  isActive = false,
  size = sizes.MD,
  variant = variants.PRIMARY,
  as,
  ...props
}) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        size={size}
        variant="tertiary"
        colorKey={variant === variants.PRIMARY ? "primary" : "textSubtle"}
        {...props}
      />
    );
  }

  return <SwapButton as={as} size={size} variant={variant} {...props} />;
};

export default ButtonMenuItem;
