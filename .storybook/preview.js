import "./../src/index.css";
import "./../src/base.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: "#FFFFFF"
      },
      {
        name: "gray",
        value: "#f2f2f2"
      }
    ]
  }
}