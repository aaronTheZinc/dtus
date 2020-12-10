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
import AccountDetail from './view'
// import { render } from 'node-sass';
const useStyles = {
  root: { height: '100vh' },
  userPayout: {
    color: 'white',
    backgroundColor: 'black',
    height: '100%',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
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
}
class Profile extends React.Component {
  // const classes = useStyles();
  // const [user, setUser] = useState(null);
  // const [error, setError] = useState('');
  
  constructor() {
    super()
    this.classes = useStyles;
    this.state = {
        isLoaded: false,
        data: null,
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        hasCreatedSource: false,
      
    }
  }
  componentDidMount() {
    this.fetchData()
  }

completeOnboarding = async() => {
          const uid = await firebase.auth().currentUser.uid
  try{
  const { data } = await axios.get(
    `https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/completeOnboarding?uid=${uid}`,
  );
  window.open(data.url)
  }catch(err) {
    console.log(err)
  }
}



async fetchData () {
      try {
        const uid = firebase.auth().currentUser.uid
        // console.log(uid)
        const { data } = await axios.get(
          `https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/profile?uid=${uid}`,
        );
        console.log(data)
       
        if(data.err) {
          this.setState({
            visible: true
          })
        }else {
    
        
          this.setState({
            isLoaded: true,
            data: data
          })
        }
  
        console.log(data);
        
      } catch (error) {
        // alert(error)
      }
    }
  
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = () => {
      this.setState({
        ModalText: 'You Must Complete The Sign Up With Stripe In Order To Get Access To Payout History',
        confirmLoading: true,
      });
    
      this.completeOnboarding()
    }

    handleCancel = () => {
      console.log('Clicked cancel button');
      this.setState({
        visible: false,
      });
      window.open('/home')
    };
  




  render() {
  
    const classes = this.classes
    const { visible, confirmLoading, ModalText } = this.state;
    let user = this.state.data

    if(this.state.isLoaded) {
     
 return (
   
<AccountDetail
user={user}
/>

      ) 
 } else {
return (
    <Modal
    title="You Must Finish Registering With Stripe."
    visible={visible}
    onOk={this.handleOk}
    confirmLoading={confirmLoading}
    onCancel={this.handleCancel}
  >
    <p>You must complete the registration with Stripe in order to access Payout capabilities.</p>
    <b>
    <ol>
    <li>Payout</li>
    <li>Payout History</li>
    <li>Change Card or Bank Information</li>
   
    </ol>
    </b>
  </Modal>
   
)


 }
 


   
    
  // if (user) {
  //   return (
  //     <Grid container className={classes.root}>
  //       <Grid item xs={6} sm={4} className={classes.userPayout}>
  //         <Grid
  //           container
  //           direction="column"
  //           justify="space-evenly"
  //           alignItems="center"
  //         >
  //           <Grid item className={classes.balance}>
  //             <Typography variant="h4">
  //               {user.stripeData.balance}
  //             </Typography>
  //             <br />
  //             <br />
  //             <br />
  //             <Typography variant="h6">Cash Out Available</Typography>
  //           </Grid>

  //           <Grid item className={classes.btnGroup}>
  //             <Button variant="contained" size="large" fullWidth>
  //               Pay Out
  //             </Button>
  //             <a
  //               href={user.stripeData.historyUrl}
  //               target="_blank"
  //               rel="noopener noreferrer"
  //             >
  //               <Button variant="contained" size="large" fullWidth>
  //                 View Payout History
  //               </Button>
  //             </a>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //       <Grid item xs={6} sm={8} className={classes.userInfo}>
  //         <Grid
  //           container
  //           direction="column"
  //           justify="space-evenly"
  //           alignItems="center"
  //         >
  //           <Grid item className={classes.infoLayout}>
  //             <Typography variant="h1">Info</Typography>
  //             <Box className={classes.name}>
  //               <Typography variant="h3">
  //                 {user.name.firstName}
  //               </Typography>
  //               <Typography variant="h3">
  //                 {user.name.lastName}
  //               </Typography>
  //             </Box>
  //           </Grid>
  //           <Grid item className={classes.addressLayout}>
  //             <Typography variant="h1">Address</Typography>
  //             <Typography variant="h3">
  //               {user.address.address}
  //             </Typography>
  //             <Box className={classes.addressBox}>
  //               <Typography variant="h3">
  //                 {user.address.zip}
  //               </Typography>
  //               <Typography variant="h3">
  //                 {user.address.city}, {user.address.state}
  //               </Typography>
  //             </Box>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </Grid>
  //   );
  // } else if (user.error) {
  //   return <Typography color="error">{'error'}</Typography>;
  // } else {
  //   return <CircularProgress color="secondary" />;
  // }
};
}



export default Profile;
