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

const StudentLogin = () => {

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
        <Typography variant='body1'>Student Login Panel</Typography>
        <TextField id="username" label="Username" variant="outlined" className={classes.textField} />
        <TextField id="password" label="Password" variant="outlined" className={classes.textField} />
        <Link to="/dashboard" className={classes.link} >
          <Button size="large" variant='outlined' className={classes.button} >Login</Button>
        </Link>
      </Grid>
    </form>
  )
};

export default StudentLogin;
