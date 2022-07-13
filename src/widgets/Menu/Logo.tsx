import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../components/Svg";
import Flex from "../../components/Flex/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "./icons";
import MenuButton from "./MenuButton";

interface Props {
	isPushed: boolean;
	isDark: boolean;
	togglePush: () => void;
	href: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, togglePush, isDark, href }) => {
	const isAbsoluteUrl = href.startsWith("http");
	const innerLogo = (
		<>
			<LogoWithText className="mobile-icon" isDark={isDark} width="240px" />
			<LogoWithText className="desktop-icon" isDark={isDark} width="240px" />
		</>
	);

	return (
		<Flex>
			{isPushed ? (
				<StyledLink to={href} aria-label="Deam home page">
					{innerLogo}
				</StyledLink>
			) : (
				""
			)}
		</Flex>
	);
};

export default Logo;
