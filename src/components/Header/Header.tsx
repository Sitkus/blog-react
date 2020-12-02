import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Header.style';
import { AppBar, Toolbar, Typography, Input, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Header: React.FC = () => {
  const classes = useStyles();

  const filterPosts = (input: string) => {
    console.log(input);
    
  }

  return (
    <AppBar position="static" color="secondary" className={classes.root}>
      <Toolbar className={classes.root}>
        <Typography className={classes.title} variant="h6">
          <Link to={'/'} className={classes.link}>
            Blog
          </Link>
        </Typography>
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
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;