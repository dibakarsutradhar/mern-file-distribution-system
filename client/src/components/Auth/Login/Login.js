import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  textField: {
    margin: '5px'
  },
  button: {
    margin: '10px',
    color: 'inherit',
    padding: '8px 58px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
}));

const Login = () => {

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
        <Typography variant='body1'>Login Panel</Typography>
        <Grid item>
          <Link to="/login/student" className={classes.link} >
            <Button variant='outlined' className={classes.button} >Student</Button>
          </Link>
          <Link to="/login/lecturer" className={classes.link} >
            <Button variant='outlined' className={classes.button} >Lecturer</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  )
};

export default Login;
