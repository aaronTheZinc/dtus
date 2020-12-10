import {
  createMuiTheme,
  responsiveFontSizes,
} from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#16191d',
    },
  },
  typography: {
    fontSize: 14,
    h1: {
      fontSize: '2rem',
      fontWeight: 900,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.2rem',
      fontWeight: 900,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
