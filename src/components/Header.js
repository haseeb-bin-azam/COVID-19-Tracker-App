import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '40px',
    letterSpacing: '2px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    // textAlign: 'center',
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h5">
            Covid-19 Tracker App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
