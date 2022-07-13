import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { ButtonProps, ButtonThemeVariant, variants } from "./types";

type ThemedProps = {
  theme: DefaultTheme;
} & ButtonProps;

const getDisabledStyles = ({ isLoading, theme }: ThemedProps) => {
  if (isLoading === true) {
    return `
      &:disabled,
      &.button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.button--disabled {
      box-shadow: none;
      cursor: not-allowed;
    }
  `;
};

const removePointerEvents = ({ disabled, as }: ThemedProps) => {
  if (disabled && as && as !== "button") {
    return `
      pointer-events: none;
    `;
  }

  return "";
};

const getButtonVariantProp = (prop: keyof ButtonThemeVariant) => ({
  theme,
  variant = variants.PRIMARY,
}: ThemedProps) => {
  return theme.button[variant][prop];
};

const NewStyledButton = styled.button<ButtonProps>`
  align-items: center;
  border:none;
  border-bottom:1px solid white;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 24px;
  font-weight: 700;
  /* max-content instead of auto for Safari fix */
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  height: ${({ size }) => (size === "sm" ? "32px" : "40px")};
  line-height: 1;
  letter-spacing: 0.03em;
  justify-content: center;
  outline: 0;
  padding: ${({ size }) => (size === "sm" ? "0 16px" : "0 24px")};
  transition: background-color 0.2s;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  color:white;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    border-bottom:2px solid #4c4a50;
    background-color: transparent;
  }

  ${getDisabledStyles}
  ${removePointerEvents}
  ${space}
`;

NewStyledButton.defaultProps = {
  fullWidth: false,
  type: "button",
};

export default NewStyledButton;
