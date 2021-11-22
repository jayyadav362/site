import React from 'react';
import logo from '../logo.svg';
import jay from '../jay.jpg';
import image from '../image.jpg';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {AppBar,Toolbar,Typography,Button,IconButton,Box,Avatar,CardActionArea,CardMedia,CardContent,CardActions,Card,CardHeader} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    folder: {
      marginTop: '25px',
      marginLeft: '20px',
      textTransform: 'none',
      color: 'blue'
    },
    f_m: {
      marginRight: '10px',
      color: 'grey'
    },
    media: {
      height: 100,
    },
    root2: {
      maxWidth: 300,
      marginTop: '25px',
      marginLeft: '20px',
    },
    m_auto: {
      marginLeft: 'auto',
    },
    brdr: {
      borderTop: '1px solid #f3e5f5',
    },
    side: {
      color: 'white',
      marginLeft: '200px',
    }
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" color="bg.white">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="text.secondary" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <img   src={logo} />
            <Typography variant="h6" className={classes.title}>
             <Box color="text.secondary" ml="5px"> Classroom</Box>
            </Typography>
            <IconButton color="inherit" ><AddIcon/></IconButton>
            <IconButton color="inherit"><DragIndicatorIcon/></IconButton>
            <Avatar alt="Remy Sharp" src={jay} />
          </Toolbar>
        </AppBar>
        <Button className={classes.folder}><FolderOpenIcon className={classes.f_m}/> To review</Button>
        <Button className={classes.folder}><CalendarTodayIcon className={classes.f_m}/> Calendar</Button>

        <Card className={classes.root2}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image}>
          <Toolbar>
              <Box component="h2" color="white"> jay</Box>
             <IconButton  className={classes.side} ><MoreVertIcon /></IconButton>
          </Toolbar> 
          <Box component="p" color="white" mt="10px" ml="20px"> 15 students</Box> 
        </CardMedia>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
             Blanditiis repudiandae sequi dignissimos ipsum labore excepturi eveniet, magni laboriosam quis nemo.
              Laboriosam saepe fugiat est ab maiores atque perspiciatis exercitationem optio?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.brdr}>
      <IconButton className={classes.m_auto} color="inherit" ><TrendingUpIcon/></IconButton>
      <IconButton className={classes.m_auto} color="inherit" ><FolderOpenIcon /></IconButton>
      </CardActions>
    </Card>
      </div>
    );
  }