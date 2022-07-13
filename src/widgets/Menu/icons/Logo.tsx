import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="-50 0 255 150" {...props}>
      <image width="140" height="140" href={isDark ? '/images/icicb/logo-2.png' : '/images/icicb/logo-2.png'} />
    </Svg>
  )
};

export default Logo;
