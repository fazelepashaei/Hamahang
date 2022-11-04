import iranYkanBold from "../font/iranyekanwebboldfanum.woff";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const font = {
  fontFamily: "iranYkanBold",
  fontWeight: 400,
  src: `url(${iranYkanBold})`,
};

const boldFont = createTheme({
  typography: {
    fontFamily: "iranYkanBold",
    fontSize: 18,
    fontWeight: 500,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [iranYkanBold],
      },
    },
  },
});

export default boldFont;
