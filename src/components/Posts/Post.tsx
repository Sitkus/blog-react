import React, { useContext } from 'react';
import useStyles from './Post.style';
import PostContext from '../../context/PostContext';

// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Post = () => {
  const classes = useStyles();
  const { postHref, setPostHref, posts, setPosts } = useContext(PostContext);

  return (
    <>
      { 
        posts.map((post, index) => (
          post.href === window.location.pathname ?
          <Grid item key={index}>
            <Container maxWidth="md" className={classes.container}>
              <Typography variant="h1" className={classes.title}>
                {post.title}
              </Typography>
              <Typography variant="h2" className={classes.heading1}>
                {post.content.heading1}
              </Typography>
              {
                post.content.body1.map((paragraph, index) => (
                  <Typography variant="body1" className={classes.paragraph} key={index}>{paragraph}</Typography>
                ))
              }
              {              
                post.content.heading2 ?
                <Typography variant="h3" className={classes.heading2}>{post.content.heading2}</Typography> :
                null
              }
              {
                post.content.body2 ?
                post.content.body2.map((paragraph, index) => (
                  <Typography variant="body1" className={classes.paragraph} key={index}>{paragraph}</Typography>
                )) :
                null
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