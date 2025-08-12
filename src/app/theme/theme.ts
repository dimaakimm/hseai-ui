import type { IColorsTheme, IFontTheme, ITheme } from "./theme.types.ts";

const AppFonts = {
  Play: "Play",
  Roboto: "Roboto",
};

const fonts: IFontTheme = {
  headline: {
    extraLarge: `
    font-family: ${AppFonts.Play};
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
  `,
    large: `
    font-family: ${AppFonts.Play};
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
  `,
    medium: `
    font-family: ${AppFonts.Play};
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
  `,
    small: `
    font-family: ${AppFonts.Play};
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
  `,
  },
  title: {
    large: `
    font-family: ${AppFonts.Roboto};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.2;
  `,
    medium: `
    font-family: ${AppFonts.Roboto};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
  `,
    small: `
    font-family: ${AppFonts.Roboto};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
  `,
  },
  body: {
    large: `
    font-family: ${AppFonts.Roboto};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.3;
  `,
    medium: `
    font-family: ${AppFonts.Roboto};
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  `,
    small: `
    font-family: ${AppFonts.Roboto};
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
  `,
  },
};

const themeColors: IColorsTheme = {
  darkBlue: "#0F2D69",
  primaryBlue: "#374B9B",
  primaryGrey: "#939598",
  primaryLightGrey: "#C7C8CA",
  secondaryLightGrey: "#E6E7E8",
};

export const defaultTheme: ITheme = {
  colors: themeColors,
  fonts: fonts,
};
