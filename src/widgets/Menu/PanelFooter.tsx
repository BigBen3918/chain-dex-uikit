import React from "react";
import styled from "styled-components";
import { CogIcon, SvgProps } from "../../components/Svg";
import { TradeIcon } from "./icons";
import Text from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import IconButton from "../../components/Button/IconButton";
import * as IconModule from "./icons";
import { socials, MENU_ENTRY_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps { }

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon, LanguageIcon } = Icons;

const Container = styled.div`
  flex: none;
  margin-left:70px;
  margin-bottom:90px;

`;

const SettingsEntry = styled.div`
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
  color:white;
  font-size:40px;
  font-color:white;
  font-weight:400;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
  priceLink,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  return (
    <>
      <Container>
        <SettingsEntry>Fast<TradeIcon style={{ marginLeft: "15px", width: "30px" }} /></SettingsEntry>
        <SettingsEntry>Deam</SettingsEntry>
        <SettingsEntry>Exchange</SettingsEntry>
      </Container>
    </>
  );
};

export default PanelFooter;
