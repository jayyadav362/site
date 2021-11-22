import React from 'react';
import Logo from '../images/flipkart-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button,InputBase,Container,Popover} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  row: {
    backgroundColor:'white',
  },
  link_row: {
    '& > *': {
    color: 'black',
    marginLeft: '20px',
    fontWeight: '500',
    fontSize: '11px',
  },
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),

  },
  bacg: {
        backgroundColor: '#2874f0',
        position: 'fixed',
  },
  image: {
    width: '80px',
    height: '20px',
    marginTop: '10px',
  },
  cart: {
    color: 'white',
    marginLeft: '10px',
  },
  pr: {
    marginLeft: '-200px',
  },
  mo: {
    marginLeft: '10px',
  },
  search: {  
    marginRight: '350px',  
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    color: 'blue',
    display: 'inline',
    marginLeft: '-50px',
    marginTop: '5px',
    position: 'absolute',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    paddingRight: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '65ch',
    },
  },
}));

export default function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorE2, setAnchorE2] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handlePopoverOpen2 = (event) => {
    setAnchorE2(event.currentTarget);
  };

  const handlePopoverClose2 = () => {
    setAnchorE2(null);
  };


  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bacg}>
          <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
          <img className={classes.image}  src={Logo} />  
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>

          <Button className={classes.pr} color="inherit" aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>Jay <ArrowDropDownIcon/></Button>
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
        <Typography>My Profile</Typography>
        <Typography>Orders</Typography>
        <Typography>Wishlist</Typography>
        <Typography>Logout</Typography>
      </Popover>

          <Button className={classes.mo} color="inherit" aria-owns={open2 ? 'more-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen2}
        onMouseLeave={handlePopoverClose2}>More <ArrowDropDownIcon/></Button>
        <Popover
        id="more-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open2}
        anchorEl={anchorE2}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose2}
        disableRestoreFocus
      >
        <Typography>Notification</Typography>
        <Typography>24x7 Customer care</Typography>
        <Typography>Download App</Typography>
      </Popover>
        

          <Button className={classes.cart}><ShoppingCartIcon/> Cart</Button>
        </Toolbar>
        </Container>
      </AppBar>
        <Toolbar className={classes.row} position="static">
        <Container className={classes.link_row}>
          <Button href="#" >Electronics<ArrowDropDownIcon /></Button>
          <Button href="#" >TVs & Appliances<ArrowDropDownIcon /></Button>
          <Button href="#" >Men<ArrowDropDownIcon /></Button>
          <Button href="#" >Women<ArrowDropDownIcon /></Button>
          <Button href="#" >Baby & Kids<ArrowDropDownIcon /></Button>
          <Button href="#" >Home & Furniture<ArrowDropDownIcon /></Button>
          <Button href="#" >Sports, Books & More<ArrowDropDownIcon /></Button>
          <Button href="#" >Flights<ArrowDropDownIcon /></Button>
          <Button href="#" >Offer Zone<ArrowDropDownIcon /></Button>
        </Container>
        </Toolbar> 
    </div>
  );
}
