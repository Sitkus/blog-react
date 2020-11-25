import React from 'react';
import ReactDOM from 'react-dom';
import Blog from './Blog';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Blog />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
