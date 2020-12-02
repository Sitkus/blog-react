import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Blog, Post, Header, Footer } from './components/';
import './css/style.css';
import { Grid } from '@material-ui/core';

const Routes: React.FC = () => {
  return (
    <Router>
      <Route render={({ location }) => (
        <>
          <Header />
            <TransitionGroup>
              <CSSTransition
                timeout={500}
                classNames='fade'
                key={location.key}
              >
                <Grid container>
                  <Grid item xs={1} sm={2}></Grid>
                  <Switch location={location}>
                      <Route exact path={'/'} component={Blog} />
                      <Route exact path={`/post/:id`} component={Post} />
                      <Route path={'/'} render={() => <div className="error">404</div>} />
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
