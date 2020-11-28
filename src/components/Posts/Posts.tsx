import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Posts.style';
import PostContext from '../../context/PostContext';

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
  const { postHref, setPostHref, posts, setPosts } = useContext(PostContext);

  return (
    <>
      {
        posts.map((post, index) => (
          <Grid item key={index}>
            <Card className={classes.root}>
              {/* <CardActionArea> */}
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
              {/* </CardActionArea> */}
              <CardActions>
                <Link 
                    onClick={() => setPostHref(post.href)} 
                    to={`${post.href}`}
                    className={classes.link}
                  >
                  <Button size="medium" color="primary">
                    Read More...
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </>
  );
}

export default Posts;
