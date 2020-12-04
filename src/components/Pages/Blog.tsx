import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import useStyles from './Blog.style';
import Posts from './Posts';
import { Grid } from '@material-ui/core';

interface Props extends RouteComponentProps { };

const Blog: React.FC<Props> = () => {
  const classes = useStyles();

  return (
    <Grid 
      container 
      item 
      sm={8}
      justify="center"
      alignItems="center"
      // spacing={5}
      className={classes.gridRoot}
    >
      <Posts />
    </Grid>
  );
}

export default Blog;
