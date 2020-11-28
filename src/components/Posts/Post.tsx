import React, { useContext } from 'react';
import useStyles from './Post.style';
import PostContext from '../../context/PostContext';

// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Post = () => {
  const classes = useStyles();
  const { postHref, setPostHref, posts, setPosts } = useContext(PostContext);

  const previousPost = (index: number) => {
    index -= 1;

    if (index > 0) {
      setPostHref(posts[index].href);
    }
  }

  const nextPost = (index: number) => {
    index += 1;

    if (index < posts.length) {
      setPostHref(posts[index].href);
    }
  }

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
              <ButtonGroup fullWidth disableElevation variant="contained" color="primary">
                <Button onClick={() => previousPost(index)}>Previous</Button>
                <Button onClick={() => nextPost(index)}>Next</Button>
              </ButtonGroup>
            </Container>
          </Grid> :
          null
        ))
      }
    </>
  );
}

export default Post;