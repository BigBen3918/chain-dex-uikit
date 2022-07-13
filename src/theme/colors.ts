import { Colors } from "./types";

export const baseColors = {
  failure: "#ff4c4c",
  primary: "#091c2c",
  primaryBright: "#2F4F6B",
  primaryDark: "#2F4F6B",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
  third: "#D0B49F",
  thirdBright: "white",
  thirdDark: "white",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",//051828
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundDisabled: "#E9EAEB",
  contrast: "#f4f7fa",
  invertedContrast: "black",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#452A7A",
  textDisabled: "#BDC2C4",
  textSubtle: "#113049",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#bddaf8",
  background: "url(/images/background.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100% 100%",
  backgroundDisabled: "#113049",
  contrast: "#FFFFFF",
  invertedContrast: "#f4f7fa",
  input: "#090805",
  primaryDark: "#0098A1",
  tertiary: "#090805",
  text: "#e4e8ea",//7466af
  textDisabled: "#666171",
  textSubtle: "#b8b8b8",
  borderColor: "#D0B49F",
  card: "#090805",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
