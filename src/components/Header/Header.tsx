import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Header.style';
import { usePosts } from '../../context/PostsContext';
import { AppBar, Toolbar, Typography, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Header = ({ location }: any) => {
  const classes = useStyles();
  const { posts, setPosts } = usePosts();
  const [ originalPosts, setOriginalPosts ] = useState(posts);

  const filterPosts = (input: string): void => {
    const filteredPosts = originalPosts.filter(post => post.title.includes(input));

    setPosts([...filteredPosts]);
  }

  useEffect(() => {
    setPosts([...originalPosts]);
  }, [location.pathname]);

  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Toolbar className={classes.root}>
        <Typography className={classes.title} variant="h6">
          <Link to={'/'} className={classes.link}>
            Blog
          </Link>
        </Typography>
        {
          location.pathname === '/' ?
          <Input
            id="input-with-icon-adornment"
            placeholder="Search..."
            onChange={(e) => filterPosts(e.target.value)}
            classes={{
              root: classes.inputRoot,
              underline: classes.inputUnderline
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          /> :
          null
        }
      </Toolbar>
    </AppBar>
  );
}

export default Header;