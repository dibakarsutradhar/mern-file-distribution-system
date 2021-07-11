import React from 'react';
import {
  makeStyles, Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontWeight: 'light',
    fontSize: 'small',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" align='center' className={classes.title}>
        Copyright &copy; {new Date().getFullYear()} FDS
      </Typography>
    </div>
  );
}