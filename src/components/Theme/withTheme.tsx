import React from "react";

import SushiTailwindTheme from "./SushiTailwindTheme";

const withTheme = (Component: any) => {
  const WithTheme = (props: Record<string, any>) => {
    return <SushiTailwindTheme.Consumer>{(theme) => <Component {...props} theme={theme} />}</SushiTailwindTheme.Consumer>;
  };
  WithTheme.displayName = Component.displayName;
  return WithTheme;
};
export default withTheme;
