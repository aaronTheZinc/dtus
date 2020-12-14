import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CustomDivider from '../../utils/CustomDivider';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import {MYloader} from '../LoadingScreen/Loader'
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white'
  },
  shopInfo: {
    padding: 50,
    '& h1': { paddingBottom: 10 },
  },
  shopAvatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    border: '1px #16191d solid',
    float: 'right',
    marginTop: -70,
    marginRight: -20,
  },
  productList: {},
  divider: {
    border: '1px solid black',
    height: 0,
    margin: 30,
  },
  dividerText: {
    backgroundColor: '#FFFFFF',
  },
  productContainer: {
    height: 400,
    border: '1px solid black',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 20,
  },
  productImage: {
    width: 300,
    height: 300,
  },
  productInfo: {
    backgroundColor: 'black',
    padding: '30px 10px',
    margin: 10,
    position: 'relative',
    height: 'auto',
    '& div': { color: 'white' },
  },
  shopAbout: {
    width: 400,
    height: 'auto',
    margin: '130px auto ',
    '& h1': { paddingBottom: 50 },
  },
  storeFrontImage: {
    alignContent: 'center',
    width: '50%',
    borderRadius: '40px',
    height: '700px',
  },
}));

export default  ({uid}) => {
  const classes = useStyles();
  const [shopData, setShopData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchShop(uid) {

      try {
        const { data } = await axios.get(
          `https://us-central1-downtown-97d7d.cloudfunctions.net/webAppConnect/getShop?uid=${uid}`,
        );
        console.log(data)
        setShopData(data);
      } catch (error) {
        setError(error.data.response.message);
      }
    }
    fetchShop(uid);
  }, []);

  if (shopData) {
    return (
      <div className={classes.root} style={{backgroundColor:'white'}}>
        {console.log(shopData)}
        <div className={classes.shopInfo}>
          <Typography variant="h1">
            {shopData.shopHeader.shopName}
          </Typography>
          <Typography variant="h3" color="textSecondary">
            {shopData.shopHeader.location}
          </Typography>
          <Avatar
            className={classes.shopAvatar}
            alt="shop"
            src={shopData.shopHeader.iconUrl}
          />
        </div>
        <div className={classes.productList}>
          <CustomDivider title="Products" />
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            style={{ padding: '0 40px' }}
          >
            {shopData.products.map((product, i) => (
              <Grid item key={i} className={classes.productContainer}>
                <CardMedia
                  image={product.Image0}
                  className={classes.productImage}
                />
                <div className={classes.productInfo}>
                  <Box component="div" display="inline" p={2}>
                    {`$`+product.price}
                  </Box>
                  <Box
                    component="div"
                    display="inline"
                    p={2}
                    textOverflow="ellipsis"
                  >
                    {product.name}
                  </Box>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: '80px 0 100px 0' }}
        >
          Add or Update
        </Button>
        {/* <CardMedia image={shopData.shopFooter.storeFrontImage} /> */}

        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <CardMedia
          image={shopData.shopFooter.storeFrontImage}
          className={classes.storeFrontImage}
        />
        </div>

        <Grid className={classes.shopAbout}>
       
        </Grid>
      </div>
    );
  } else if (error) {
    return <Typography color="error">{error}</Typography>;
  } else {
    return <MYloader/>
  }
};


