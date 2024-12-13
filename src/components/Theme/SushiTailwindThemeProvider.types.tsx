export interface SushiTailwindDefaultTheme {
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

export interface SushiTailwindThemeProviderProps {
  theme?: SushiTailwindDefaultTheme;
  children?: React.ReactNode;
}
