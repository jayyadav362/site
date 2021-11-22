import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,IconButton,Avatar,InputBase,Badge} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import logo from '../image/logo.png';
import profile from '../image/user.jpg';
import HomeIcon from '@material-ui/icons/Home';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar:{
    backgroundColor:"#FFFFFF",
    boxShadow: 'none',
  },
 logo : {
    marginLeft: '180px',
 },
search:{
    display: "flex",
    flex: 1,
    
},
searchInput:{
    backgroundColor:"#FAFAFA",
    padding: "10px",
    height: "28px",
    width: '130px',
    fontSize: '12px',
    color: 'black',
    border: '1px solid #DBDBDB',
    borderLeft: '0px',
},
searchIcon:{
    backgroundColor: "#FAFAFA",
    color: 'grey',
    padding: "8px",
    height: "10px",
    border: '1px solid #DBDBDB',
    borderRight: '0px',
    paddingLeft: '50px',
    marginLeft: '260px',
},
home:{
    fontSize: '34px',
    color: 'black',
},
message:{
    fontSize: '30px',
    color: 'black',
},
profile:{
    height:'30px',
    width: '30px',
},
icons: {
    marginRight: '180px',
}
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  return (
      <React.Fragment>
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <img src={logo} alt="" className={classes.logo} />
          <div className={classes.search}> 
             <SearchIcon className={classes.searchIcon} />
            <InputBase className={classes.searchInput} placeholder='Search' />
          </div>
          <div className={classes.icons}>
          <IconButton>
              <HomeIcon className={classes.home}/>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <ChatBubbleOutlineIcon className={classes.message}/>
              </Badge>
            </IconButton>
            <IconButton>
              <ExploreIcon className={classes.message}/>
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon className={classes.message}/>
            </IconButton>
            <IconButton>
            <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
            </IconButton>
            </div>
            
        </Toolbar>
        </AppBar>
        </div>
    </React.Fragment>
  );
}
