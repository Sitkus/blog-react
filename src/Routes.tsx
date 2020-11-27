import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Blog, Post, Header, Footer } from './components/';
import PostContext from './PostContext';
import Grid from '@material-ui/core/Grid';
import './css/style.css';

const Routes = () => {
  const [postName, setPostName] = useState('test');

  return (
    <Router>
      <PostContext.Provider value={{ postName, setPostName }}>
        <Header />
        <Switch>
          <Grid container>
            <Grid item sm={2}></Grid>
            <Route exact path={'/'} component={Blog} />
            <Route exact path={`/${postName}`} component={Post} />
            <Grid item sm={2}></Grid>
          </Grid>
        </Switch>
        <Footer />
      </PostContext.Provider>
    </Router>
  );
}

export default Routes;
