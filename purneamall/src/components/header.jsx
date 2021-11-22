import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import {AppBar,Toolbar,Typography,InputBase,ButtonBase,FormControl,NativeSelect,Box,Divider} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EmailIcon from '@material-ui/icons/Email';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PhoneIcon from '@material-ui/icons/Phone';
import logo from '../image/logo.png';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar:{
    backgroundColor:"#FFFFFF",
    padding: "10px",
    boxShadow: "none"
  },
  logo:{
    width:"250px",
    height:"60px",
    marginLeft: "110px"
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  location:{
    padding:"0px",
    color:"grey",
    marginRight: "110px"
  },
  formControl: {
    backgroundColor:"#F7F7F7",
    padding:"4px",
    height:"26px",
    borderRadius:"30px",
    width:"50px",
    marginLeft: "20px",
    border: "1px solid #E7E7E7",
  },
 selectEmpty:{
    fontSize:"11px",
 },
search:{
    display: "flex",
    flex: 1,
},
searchInput:{
    backgroundColor:"#F7F7F7",
    padding: "17px",
    height: "10px",
    width: "200px",
    borderBottomLeftRadius:"30px",
    borderTopLeftRadius:"30px",
    marginLeft: "5px",
    border: "1px solid #E7E7E7",
    borderRight: "none"
},
searchIcon:{
    backgroundColor: "#F7F7F7",
    color: "#777777",
    padding: "7px",
    height: "20px",
    borderBottomRightRadius:"30px",
    borderTopRightRadius:"30px",
    border: "1px solid #E7E7E7",
    borderLeft: "none"
},

  subNav:{
      backgroundColor:"#143C70",
      boxShadow: "none"
  },
  buttonSpace:{
    marginTop:"-10px",
    marginBottom: "-10px",
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  subText:{
      color:"#BCC7D6",
      fontSize: "12px",
      fontWeight: "bold",
      textDecoration: "none"
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  return (
      <React.Fragment>
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar>
          <img src={logo} alt="My logo" className={classes.logo} />
          <FormControl  className={classes.formControl}>
          <NativeSelect className={classes.selectEmpty}>
          <option value="" disabled>
            Placeholder
          </option>
          <option>All</option>
          <option>Deals</option>
          <option >Apps & Games</option>
          <option>Baby</option>
          <option>Books</option>
        </NativeSelect>
      </FormControl>
          <div className={classes.search}>  
            <InputBase className={classes.searchInput} placeholder="Search Products.." style={{ fontSize: "11px",}}/>
            <SearchIcon className={classes.searchIcon} />
          </div>
          <div className={classes.location}>
        <Toolbar>
        <Typography >
            <Box fontSize={13} >
              <Toolbar>WISHLIST <FavoriteIcon/></Toolbar>
            </Box>
          </Typography>
          <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px"}}/>
          <Typography >
            <Box fontSize={13} >
              <Toolbar>LOGIN/REGISTER</Toolbar>
            </Box>
          </Typography>
          <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px"}}/>
          <Typography >
            <Box fontSize={13} >
              <Toolbar>CART/₹0.00 <LocalMallIcon/></Toolbar>
            </Box>
          </Typography>
        </Toolbar>
          </div>
        </Toolbar>
        </AppBar>
        <AppBar position="static"className={classes.subNav}> 
            <Toolbar className={classes.buttonSpace}  >
              
                <ButtonBase style={{marginLeft:"130px"}}><Link to="/" className={classes.subText}>HOME</Link> </ButtonBase> 
                <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px",backgroundColor:"#43638D"}}/>
                <ButtonBase className={classes.subText}><Link to="/shop" className={classes.subText}>SHOP</Link></ButtonBase>
                <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px",backgroundColor:"#43638D"}}/>
                <ButtonBase className={classes.subText}>MY ACCOUNT</ButtonBase>
                <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px",backgroundColor:"#43638D"}}/>
                <ButtonBase className={classes.subText}>TRACK YOUR ORDER</ButtonBase>
                <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px",backgroundColor:"#43638D"}}/>
                <ButtonBase className={classes.subText}>CONTACT US</ButtonBase>
                <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px",backgroundColor:"#43638D"}}/>
                <ButtonBase className={classes.subText}>CHECKOUT</ButtonBase>

                <ButtonBase className={classes.subText} style={{marginLeft:"85px"}}><EmailIcon/>EMAIL</ButtonBase>
                <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px",backgroundColor:"#43638D"}}/>
                <ButtonBase className={classes.subText}><ScheduleIcon/>09:00-21:00</ButtonBase>
                <Divider orientation="vertical" flexItem  style={{ height: "30px",marginTop:"15px",backgroundColor:"#43638D"}}/>
                <ButtonBase className={classes.subText} ><PhoneIcon/>+91 7903163066</ButtonBase>
            </Toolbar>
        </AppBar>
    </div>
    </React.Fragment>
  );
}
