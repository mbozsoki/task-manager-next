import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },  
  backgrounds: {
    default: 'alabaster',
    values: [
      {
        name: 'alabaster',
        value: '#ece9e1',
      },
    ],
  },
};