import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './Header.style';

// Material UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

const Header = () => {
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