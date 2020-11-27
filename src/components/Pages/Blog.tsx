import React, { useContext } from 'react';
import useStyles from './Blog.style';
import PostContext from '../../PostContext';
import Posts from '../Posts/Posts';

// Material UI
import Grid from '@material-ui/core/Grid';

const Blog = () => {
  const classes = useStyles();
  const { postName, setPostName } = useContext(PostContext);

  return (
    <Grid 
      container 
      item 
      sm={8}
      direction="column"
      justify="center"
      alignItems="center"
      spacing={5}
      className={classes.gridRoot}
    >
      <Posts />
    </Grid>
  );
}

export default Blog;
