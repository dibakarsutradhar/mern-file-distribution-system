import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, makeStyles, TextField, Typography } from '@material-ui/core';


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

const Register = () => {

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" >
      <Grid
        container 
        justify = "center"
        pacing={0}
        alignItems="center"
        direction='column'
        style={{ minHeight: "100vh" }}
      >
        <Typography variant='body1'>Student Registration</Typography>
        <TextField id="username" label="Username" variant="outlined" className={classes.textField} />
        <TextField id="password" label="Password" variant="outlined" className={classes.textField} />
        <TextField id="email" label="Email Address" variant="outlined" className={classes.textField} />
        <TextField id="studentID" label="Student ID" variant="outlined" className={classes.textField} />
        <Link to="/login" className={classes.link} >
          <Button size="large" variant='outlined' className={classes.button} >Register</Button>
        </Link>
        <br />
        <Typography variant='subtitle1'>
          Registering as a Lecturer? <Link to="/register/lecturer" >Click Here</Link>
        </Typography>
      </Grid>
    </form>
  )
};

export default Register;
