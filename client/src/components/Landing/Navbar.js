import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" align='center' className={classes.title}>
            <Link to="/" className={classes.link} >FDS</Link>
          </Typography>
          <Link to="/login" className={classes.link} >
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}