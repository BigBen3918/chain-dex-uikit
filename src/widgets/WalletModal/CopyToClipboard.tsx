import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { CopyIcon } from "../../components/Svg";

interface Props {
  toCopy: string;
}

const StyleButton = styled(Text).attrs({ role: "button" })`
  position: relative;
  display: flex;
  color:#D0B49F;
  align-items: center;
`;

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  background-color: #091c2c;
  color: #D0B49F;
  border-radius: 16px;
  opacity: 0.7;
`;

const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <StyleButton
      small
      bold
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(toCopy);
          setIsTooltipDisplayed(true);
          setTimeout(() => {
            setIsTooltipDisplayed(false);
          }, 1000);
        }
      }}
      {...props}
    >
      {children}
      <CopyIcon width="20px" color="white" ml="4px" />
      <Tooltip isTooltipDisplayed={isTooltipDisplayed}>Copied</Tooltip>
    </StyleButton>
  );
};

export default CopyToClipboard;
