import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffd710'
    },
    secondary: {
      main: '#161616'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    h1: {
      fontWeight: 'normal',
      fontSize: '26px'
    },
    h2: {
      fontSize: '16px'
    }
  }
});

export default theme;