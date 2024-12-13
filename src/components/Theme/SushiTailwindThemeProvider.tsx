import React from "react";
import SushiTailwindTheme from "./SushiTailwindTheme";
import defaultTheme from "./defaultTheme";
import { Global } from "@emotion/react";
import { SushiTailwindThemeProviderProps } from "./SushiTailwindThemeProvider.types";

const SushiTailwindThemeProvider = ({ theme, children }: SushiTailwindThemeProviderProps) => {
  const mergedTheme = Object.assign({}, defaultTheme, theme || {});

  return (
    <SushiTailwindTheme.Provider value={mergedTheme}>
      <Global styles={{}}></Global>
      {children}
    </SushiTailwindTheme.Provider>
  );
};

export default SushiTailwindThemeProvider;
