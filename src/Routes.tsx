import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Blog, Post, Header, Footer } from './components/';
import { usePostHref } from './context/PostsContext';
import './css/style.css';

// Material UI Imports
import Grid from '@material-ui/core/Grid';

const Routes = () => {
  const { postHref } = usePostHref();

  return (
    <Router>
      <Route render={({ location }) => (
      <>
        <Header />
          <TransitionGroup>
            <CSSTransition
              timeout={300}
              classNames='fade'
              key={location.key}
            >
              <Grid container>
                <Grid item xs={1} sm={2}></Grid>
                <Switch location={location}>
                  <>
                    <Route exact path={'/'} component={Blog} />
                    <Route exact path={`${postHref}`} component={Post} />
                  </>
                </Switch>
                <Grid item xs={1} sm={2}></Grid>
              </Grid>
            </CSSTransition>
          </TransitionGroup>
        <Footer />
      </>
      )} />
    </Router>
  );
}

export default Routes;
