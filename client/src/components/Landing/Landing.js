import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    justifyContent: 'center',
    alignContent: 'center',
    margin: '0 auto',
  },
  button: {
    margin: '10px',
    color: 'inherit',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
}));

export default function ButtonAppBar() {
  
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Grid 
        container 
        justify = "center"
        pacing={0}
        alignItems="center"
        style={{ minHeight: "100vh" }}
        direction='column'
      >
        <Typography variant='body1'>Welcome to FDS</Typography>
        <Grid item>
          <Link to="/login" className={classes.link} >
            <Button variant='outlined' className={classes.button} >Login</Button>
          </Link>
          <Link to="/register" className={classes.link} >
            <Button variant='outlined' className={classes.button} >Sign Up</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}