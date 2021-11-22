import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,IconButton,Typography,InputBase,Link,Badge,ButtonBase,FormControl,NativeSelect,Box,Popover} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar:{
    backgroundColor:"#FFFFFF",
    boxShadow: 'none',
  },
  menuIcon:{
    fontSize:30,
    borderWidth:"5px",
    color:"grey",
    marginLeft: '30px'
  },
search:{
    display: "flex",
    flex: 1,
},
searchInput:{
    backgroundColor:"#EDEDED",
    padding: "10px",
    height: "36px",
    width: "1100px",
    borderBottomLeftRadius:"10px",
    borderTopLeftRadius:"10px",
    fontSize: '12px',
    color: 'black'
},
searchIcon:{
    backgroundColor: "#EDEDED",
    color: 'grey',
    padding: "8px",
    height: "20px",
    borderBottomRightRadius:"25%",
    borderTopRightRadius:"25%"
},
link:{
    color:'black',
    textDecoration: 'none',
    marginRight: '35px'
},
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  return (
      <React.Fragment>
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <div className={classes.search}> 
            <InputBase className={classes.searchInput} placeholder='Search' />
            <SearchIcon className={classes.searchIcon} />
          </div>
          <Link className={classes.link}>Login</Link>
        </Toolbar>
        </AppBar>
        </div>
    </React.Fragment>
  );
}
