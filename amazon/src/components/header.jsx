import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,IconButton,Typography,InputBase,Badge,ButtonBase,FormControl,NativeSelect,Box,Popover} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import CartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import logo from '../image/logo2.png';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar:{
    backgroundColor:"#131921",
  },
  logo:{
    width:"150px",
    height:"50px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuIcon:{
    fontSize:35,
    borderWidth:"5px",
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  location:{
    padding:"0px",
  },
  formControl: {
    backgroundColor:"#F3F3F3",
    padding:"7px",
    height:"26px",
    borderBottomLeftRadius:"7%",
    borderTopLeftRadius:"7%",
    width:"50px",
  },
 selectEmpty:{
    fontSize:"15px",
 },
search:{
    display: "flex",
    flex: 1,
},
searchInput:{
    backgroundColor:"white",
    padding: "20px",
    height: "12px",
    border: "none",
    width: "450px",
    
},
searchIcon:{
    backgroundColor: "#cd9042",
    padding: "10px",
    height: "20px",
    borderBottomRightRadius:"10%",
    borderTopRightRadius:"10%"
},
cartIcon:{
    fontSize:"40px",
    color:"white",
},
popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
  },
  poptext:{
    fontSize:"15px"
  },

  subNav:{
      backgroundColor:"#232F3E",
  },
  buttonSpace:{
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  subText:{
      color:"white",
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  
  return (
      <React.Fragment>
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          
          <img src={logo} alt="My logo" className={classes.logo} />
          <div className={classes.location}>
        <Toolbar>
          <RoomIcon/>
          <Typography>
            <Box fontSize={11} ml={1}>
                Deliver to Jay
            </Box>
            <Box fontSize={13} ml={1} fontWeight="fontWeightBold">
                Purnia 854301
            </Box>
          </Typography>
          </Toolbar>
          </div>
          <div className={classes.search}>
          <FormControl variant="filled" className={classes.formControl}>
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
            <InputBase className={classes.searchInput}/>
            <SearchIcon className={classes.searchIcon} />
          </div>
          <div className={classes.location}>
        <Toolbar>
        <Typography aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
            <Box fontSize={11} mr={10} >
                Hello,Jay
            </Box>
            <Box fontSize={13} fontWeight="fontWeightBold">
                Accounts & Lists<ArrowDropDownIcon/>
            </Box>
          </Typography>
        <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography className={classes.poptext}>Your Account</Typography>
        <Typography className={classes.poptext}>Your Account</Typography>
        <Typography className={classes.poptext}>Your Orders</Typography>
        <Typography className={classes.poptext}>Your Wish List</Typography>
        <Typography className={classes.poptext}>Your Recommendations</Typography>
        <Typography className={classes.poptext}>Your Prime Membership</Typography>
        <Typography className={classes.poptext}>Your Prime Video</Typography>
        <Typography className={classes.poptext}>Your Subscribe & Save Items</Typography>
        <Typography className={classes.poptext}>Memberships & Subscriptions</Typography>
        <Typography className={classes.poptext}>Your Amazon Business Account</Typography>
        <Typography className={classes.poptext}>Your Seller Account</Typography>
        <Typography className={classes.poptext}>Manage Your Content and Devices</Typography>
        <Typography className={classes.poptext}>Switch Accounts</Typography>
        <Typography className={classes.poptext}>Sign Out</Typography>
      </Popover>
          <Typography >
            <Box fontSize={11}  ml={2} >
                Returns
            </Box>
            <Box fontSize={13} ml={2} fontWeight="fontWeightBold">
                & Orders
            </Box>
          </Typography>
          <IconButton aria-label="cart" >
            <Badge badgeContent={4} color="secondary" >
                <CartIcon  className={classes.cartIcon}/>
            </Badge>
            </IconButton>
            <Box fontSize={13} fontWeight="fontWeightBold">
                Cart
            </Box>
            <Typography >
          </Typography>
          </Toolbar>
          </div>
        </Toolbar>
        </AppBar>
        <AppBar position="static"className={classes.subNav}> 
            <Toolbar className={classes.buttonSpace}  >
                <ButtonBase className={classes.subText}>Gift Cards</ButtonBase>
                <ButtonBase className={classes.subText}>Amazon Pay</ButtonBase>
                <ButtonBase className={classes.subText}>Customer Service</ButtonBase>
                <ButtonBase className={classes.subText}>Prince's Amazon.in</ButtonBase>
                <ButtonBase className={classes.subText}>Mobiles</ButtonBase>
                <ButtonBase className={classes.subText}>Prime</ButtonBase>
                <ButtonBase className={classes.subText}>Best Sellers</ButtonBase>
                <ButtonBase className={classes.subText}>Today's Deals</ButtonBase>
                <ButtonBase className={classes.subText}>Pantry</ButtonBase>
                <ButtonBase className={classes.subText}>Buy Again</ButtonBase>
            </Toolbar>
        </AppBar>
    </div>
    </React.Fragment>
  );
}
