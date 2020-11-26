import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Blog, Post, Header, Footer } from './components/';
import PostContext from './PostContext';
import './css/style.css';

const Routes = () => {
  const [postName, setPostName] = useState('test');

  return (
    <Router>
      <PostContext.Provider value={{ postName, setPostName }}>
        <Header />
        <Switch>
          <Route exact path={'/'} component={Blog} />
          <Route exact path={`/${postName}`} component={Post} />
        </Switch>
        <Footer />
      </PostContext.Provider>
    </Router>
  );
}

export default Routes;
