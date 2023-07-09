import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiContainer: {},
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 991,
    },
  },
});

export default theme;
