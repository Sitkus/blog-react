import React from 'react';
import { withRouter } from 'react-router-dom';
import useStyles from './Posts.style';
import { usePostHref, usePosts } from '../../context/PostsContext';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid } from '@material-ui/core';

const Posts = withRouter(({ history }) => {
  const classes = useStyles();
  const { setPostHref } = usePostHref();
  const { posts } = usePosts();

  const openPost = (href: string): void => {
    setPostHref(href);
    history.push(href);
  }

  return (
    <>
      {
        posts.map((post, index) => (
          <Grid item xs={10} sm={12} className={classes.gridItem} key={index}>
            <Card>
              <CardActionArea onClick={() => openPost(post.href)}>
                <CardMedia
                  className={classes.media}
                  image={post.image}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => openPost(post.href)} size="small" color="secondary">
                  Read More...
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </>
  );
});

export default Posts;
