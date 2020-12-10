import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Buttonn from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Modal, Button } from 'antd';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import { replace } from 'formik';
import AccountView from './view'

const useStyles = makeStyles(theme => ({
  root: { height: '100vh' },
  userPayout: {
    color: 'white',
    backgroundColor: 'black',
    height: '100%',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: 20,
    '& button': {
      color: 'black',
      margin: '30px 0',
      borderRadius: 30,
      padding: 20,
      '& span': {
        fontSize: '1rem',
      },
    },
  },
  balance: {
    height: '60vh',
    paddingTop: '40%',
    '& h4': {
      color: 'white',
    },
    '& h6': {
      color: 'white',
    },
  },
  infoLayout: {
    height: '50vh',
    paddingTop: 70,
  },

  name: {
    padding: '100px 0',
    '& h3': {
      display: 'inline',
      margin: '0 40px',
    },
  },
  addressLayout: {
    padding: '100px 0',
    backgroundColor: 'black',
    height: '45vh',
    width: '70%',
    '& h3': {
      color: '#fdfdfd',
      paddingTop: 50,
      paddingBottom: 50,
    },
    '& h1': {
      color: '#fdfdfd',
    },
  },
  addressBox: {
    '& h3': {
      display: 'inline',
      margin: '0 30px',
    },
  },
}));

const AccountDetail = ({user}) => {
  const classes = useStyles();


    return (
        <div>
        <Grid container className={classes.root}>
          <Grid item xs={6} sm={4} className={classes.userPayout}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item className={classes.balance}>
                <Typography variant="h4">
                  {user.stripeData.balance}
                </Typography>
                <br />
                <br />
                <br />
                <Typography variant="h6">Cash Out Available</Typography>
              </Grid>
        
              <Grid item className={classes.btnGroup}>
                <Buttonn variant="contained" size="large" fullWidth>
                  Pay Out
                </Buttonn>
                <a
                  href={user.stripeData.historyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Buttonn variant="contained" size="large" fullWidth>
                    View Payout History
                  </Buttonn>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={8} className={classes.userInfo}>
            <Grid
              container
              direction="column"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item className={classes.infoLayout}>
                <Typography variant="h1">Info</Typography>
                <Box className={classes.name}>
                  <Typography variant="h3">
                    {user.name.firstName}
                  </Typography>
                  <Typography variant="h3">
                    {user.name.lastName}
                  </Typography>
                </Box>
              </Grid>
              <Grid item className={classes.addressLayout}>
                <Typography variant="h1">Address</Typography>
                <Typography variant="h3">
                  {user.address.address}
                </Typography>
                <Box className={classes.addressBox}>
                  <Typography variant="h3">
                    {user.address.zip}
                  </Typography>
                  <Typography variant="h3">
                    {user.address.city}, {user.address.state}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </div>
    );

};

export default AccountDetail;