import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props extends PushedProps {
  label: string;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  margin-left:60px;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  padding-left:34px;

  div{
    box-shadow:none;
  }
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  return (
    <Container>
      <MenuEntry className={className}>
        {icon}
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        {/* {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />} */}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
