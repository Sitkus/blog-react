import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f9f9f9'
    },
    secondary: {
      main: '#f1f1f1'
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