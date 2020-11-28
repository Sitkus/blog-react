import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Blog, Post, Header, Footer } from './components/';
import PostContext from './contexts/PostContext';
import Grid from '@material-ui/core/Grid';
import './css/style.css';

const Routes = () => {
  const [postHref, setPostHref] = useState('');
  const [posts, setPosts] = useState([
    {
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: 'lizard'
    },
    {
      title: 'Killa',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: 'killa'
    },
    {
      title: 'Vanilla',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: 'vanilla'
    }
  ]);

  return (
    <Router>
      <PostContext.Provider value={{ postHref, setPostHref, posts, setPosts }}>
        <Header />
        <Grid container>
          <Grid item sm={2}></Grid>
          <Switch>
            <>
              <Route exact path={'/'} component={Blog} />
              <Route exact path={`/post/${postHref}`} component={Post} />
            </>
          </Switch>
          <Grid item sm={2}></Grid>
        </Grid>
        <Footer />
      </PostContext.Provider>
    </Router>
  );
}

export default Routes;
