import React from 'react';
import useStyles from './Header.style';

// Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.root}>
        <Typography className={classes.title} variant="h6">
          Blog
        </Typography>
        <div className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder="Search Blog Post"
            inputProps={{ 'aria-label': 'search blog post' }}
          />
          <IconButton 
            color="inherit"
            type="submit" 
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;