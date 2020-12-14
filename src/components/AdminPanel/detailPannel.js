import React,{ useEffect, useState } from "react"
import { Container, Row, Col, Button } from "shards-react"
import logo from './logo.svg';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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


const totalButtonStyle = {
  position: 'absolute',
  bottom: 0,
  height: 60,
  alignContent: 'center',
  justifyContent: 'space-around',
  fontSize: 20,
  fontFamily: 'auto'
}


export const detailPannel = () => {
  const classes = useStyles();
    const user  = {
      name: {
        firstName: "Aaron",
        lastName: "Marsh",
          address: {
            address: "5320 W Outer Dr",
            city: 'Detroit',
            state: "Mi",
            zip:"48221",
  
          }
      }
    }
  
      return (
        <div>
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
  
        </div>
      )
  }