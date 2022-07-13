import React from "react";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import NewStyledButton from "./newStyledButton";
import { ButtonProps, variants, sizes } from "./types";

const SwapButton: React.FC<ButtonProps> = ({ startIcon, endIcon, children, external, isLoading, disabled, ...props }) => {
    const internalProps = external ? getExternalLinkProps() : {};
    const isDisabled = isLoading || disabled;

    return (
        <NewStyledButton {...internalProps} {...props} isLoading={isLoading} disabled={isDisabled}>
            {React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                })}
            {children}
            {React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                })}
        </NewStyledButton>
    );
};

SwapButton.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

export default SwapButton;
