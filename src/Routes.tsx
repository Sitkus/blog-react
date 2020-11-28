import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Blog, Post, Header, Footer } from './components/';
import PostContext from './context/PostContext';
import './css/style.css';

// Material UI Imports
import Grid from '@material-ui/core/Grid';

const Routes = () => {
  const [postHref, setPostHref] = useState('');
  const [posts, setPosts] = useState([
    {
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      content: {
        heading1: 'Heading 1',
        heading2: 'Heading 2',
        body1: [
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        ],
        body2: [
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        ],
      },
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: '/post/lizard'
    },
    {
      title: 'Killa',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      content: {
        heading1: 'Heading 1',
        body1: [
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        ],
      },
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: '/post/killa'
    },
    {
      title: 'Vanilla',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      content: {
        heading1: 'Heading 1',
        heading2: 'Heading 2',
        body1: [
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        ],
        body2: [
          'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
          'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
        ],
      },
      image: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
      href: '/post/vanilla'
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
              <Route exact path={`${postHref}`} component={Post} />
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
