import iranYekanRegular from "../font/iranyekanwebregularfanum.woff";
import { createTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const font = {
  fontFamily: "iranYekanRegular",
  fontWeight: 400,
  src: `url(${iranYekanRegular})`,
};

const normalFont = createTheme({
  typography: {
    fontFamily: "iranYekanRegular",
    fontSize: 16,
    fontWeight: 700,
  },

  //   overrides: {
  //     MuiCssBaseline: {
  //       "@global": {
  //         "@font-face": [iranYekanRegular],
  //       },
  //     },
  //   },
});

export default normalFont;
