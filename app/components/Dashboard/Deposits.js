/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

export default function Deposits() {
  return (
    <React.Fragment>
      <Typography component="p" variant="h5" align="center">
        Global Case
      </Typography>
      <Title>Confirmed</Title>
      <Typography component="p" variant="h7">
        177500592
      </Typography>
      <Title>Recovered</Title>
      <Typography component="p" variant="h7">
        115584768
      </Typography>
      <Title>Deaths</Title>
      <Typography component="p" variant="h7">
        3843729
      </Typography>
    </React.Fragment>
  );
}
