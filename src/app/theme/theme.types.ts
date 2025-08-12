export interface IFontTheme {
  headline: {
    extraLarge: string;
    large: string;
    medium: string;
    small: string;
  };
  title: {
    large: string;
    medium: string;
    small: string;
  };
  body: {
    large: string;
    medium: string;
    small: string;
  };
}

export interface IColorsTheme {
  darkBlue: string;
  primaryBlue: string;
  primaryGrey: string;
  primaryLightGrey: string;
  secondaryLightGrey: string;
}

export interface ITheme {
  colors: IColorsTheme;
  fonts: IFontTheme;
}
