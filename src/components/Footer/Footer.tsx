import { Paper } from '@material-ui/core';
import React from 'react';
import useStyles from './Footer.style';

const date = new Date();

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Paper component="footer" elevation={0} className={classes.root}>
      &#xA9; {date.getFullYear()} by Lukas Šitkus. All rights reserved.
    </Paper>
  );
}

export default Footer;