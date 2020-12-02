import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { PostsProvider } from './context/PostsContext';

ReactDOM.render(
    <PostsProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </PostsProvider>,
  document.getElementById('root')
);
