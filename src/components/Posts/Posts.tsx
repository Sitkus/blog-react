import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './Posts.style';
import { usePostHref, usePosts } from '../../context/PostsContext';

// Material UI Imports
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Posts = () => {
  const classes = useStyles();
  const history = useHistory();

  const { setPostHref } = usePostHref();
  const { posts } = usePosts();

  const openPost = (href: string) => {
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
}

export default Posts;
