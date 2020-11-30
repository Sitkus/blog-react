import React from 'react';
import useStyles from './Blog.style';
import Posts from '../Posts/Posts';

// Material UI Imports
import Grid from '@material-ui/core/Grid';

const Blog = () => {
  const classes = useStyles();

  return (
    <Grid 
      container 
      item 
      sm={8}
      justify="center"
      alignItems="center"
      // spacing={3}
      className={classes.gridRoot}
    >
      <Posts />
    </Grid>
  );
}

export default Blog;
