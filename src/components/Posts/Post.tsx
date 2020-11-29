import React from 'react';
import { useHistory } from 'react-router-dom'
import useStyles from './Post.style';
import { usePostHref, usePosts } from '../../context/PostsContext';

// Material UI Imports
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Post = () => {
  const classes = useStyles();
  const history = useHistory();

  const { setPostHref } = usePostHref();
  const { posts } = usePosts();

  const previousPost = (index: number) => {
    index -= 1;

    setPostHref(posts[index].href);
    history.push(posts[index].href);
  }

  const nextPost = (index: number) => {
    index += 1;

    setPostHref(posts[index].href);
    history.push(posts[index].href);
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
              <Typography variant="h2" className={classes.heading}>
                {post.content.heading}
              </Typography>
              {
                post.content.body.map((paragraph, index) => (
                  <Typography variant="body1" className={classes.paragraph} key={index}>{paragraph}</Typography>
                ))
              }
              <ButtonGroup fullWidth disableElevation variant="contained" color="primary">
                {
                  index > 0 ?
                  <Button onClick={() => previousPost(index)}>Previous</Button> :
                  null
                }
                {
                  index < posts.length - 1 ?
                  <Button onClick={() => nextPost(index)}>Next</Button> :
                  null
                }
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