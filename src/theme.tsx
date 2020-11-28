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
      color: '#ffd710',
      fontWeight: 'normal',
      fontSize: '30px'
    },
    h2: {
      fontWeight: 'normal',
      fontSize: '25px'
    },
    h3: {
      fontWeight: 'normal',
      fontSize: '21px'
    }
  }
});

export default theme;