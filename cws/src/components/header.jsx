import React from 'react';
import logo from '../images/newlogo.png';
import image from '../images/php-1-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {AppBar,Toolbar,Container,Typography,Button,IconButton,Box,Avatar,CardActionArea,CardMedia,CardContent,CardActions,Card,CardHeader} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    nav: {
        backgroundColor: '#fafafa',
        
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,
        zIndex: 5,
    },
    logo: {
        width: '250px',
        height: '30px',
    },
    b1: {
        backgroundColor: "#ef6c00",
        color: 'white',
        marginRight: '10px',
        fontSize: '12px',
        padding: '10px',
    },
    b2: {
        backgroundColor: "black",
        color: 'white',
        marginRight: '10px',
        fontSize: '12px',
        padding: '10px',
    },
    ml_auto: {
        marginLeft: 'auto',
    },
    box: {
        color: 'white',
        borderRadius: '50%',
        backgroundColor: '#ef6c00',
        paddingRight: '5px',
        paddingLeft: '5px',
        marginTop: '-10px',
    }
  }));

  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
        <AppBar position="static" className={classes.nav}>
        <Container>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="text.secondary" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <img className={classes.logo}  src={logo} />
            <div className={classes.ml_auto}>
            <Button className={classes.b1}>APPLY FOR ADMISSION</Button>
            <Button className={classes.b2}>LOGIN</Button>
            <Button><ShoppingCartIcon/> Cart<Box className={classes.box}>o</Box></Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
    );
  }