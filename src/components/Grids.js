import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginTop: '80px',
    // marginLeft: '300px',
    // marginRight: '200px'
    margin: '50px 100px'
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    // maxWidth: '20%',
    // width: '230px',
    // height: '130px'
  },
  brStyling: {
    backgroundColor: 'blue',

  }
}));

export function Grids({ data }) {
  const classes = useStyles();

  // console.log(data[0].confirmed);
  if (!data[0].confirmed) { 
    return 'loading ..'
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={4}>Infected <br /><CountUp start={0} end={data[0].confirmed} duration={1.0} separator="," /> <br /> No of active cases of Covid-19 </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={4}>Recovered <br /><CountUp start={0} end={data[0].recovered} duration={1.0} separator="," /> <br /> No of recovered cases of Covid-19 </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={4}>Deaths <br /> <CountUp start={0} end={data[0].death} duration={1.0} separator="," /> <br /> No of deaths caused by Covid-19 </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
