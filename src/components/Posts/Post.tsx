import React, { useContext } from 'react';
import useStyles from './Post.style';
import PostContext from '../../context/PostContext';

// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Post = () => {
  const { postHref, setPostHref, posts, setPosts } = useContext(PostContext);

  return (
    <>
      { 
        posts.map((post, index) => (
          post.href === window.location.pathname ?
          <Grid item key={index}>
            <Container maxWidth="md">
              <Typography variant="h1">{post.content.heading1}</Typography>
              {
                post.content.body1.map((paragraph, index) => (
                  <Typography variant="body1" key={index}>{paragraph}</Typography>
                ))
              }
            </Container>
          </Grid> :
          null
        ))
      }
    </>
  );
}

export default Post;