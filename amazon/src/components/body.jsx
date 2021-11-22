import React from 'react';
import Carousel from '../components/carousel';
import SlickSlider from '../components/slider';
import {Paper,Button,Grid,List,ListItem,ListItemAvatar,Avatar,ListItemText,Typography,Link,Card} from '@material-ui/core';
import ban1 from '../image/ban1.PNG';
import ban2 from '../image/ban2.PNG';
import ban3 from '../image/ban3.PNG';
import ban4 from '../image/ban4.PNG';
import user from '../image/jay.jpg';
import img1 from '../image/img1.jpg';
import prime from '../image/prime-video.jpg';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
      },
    card:{
        padding:"20px",
        marginTop:"-350px",
        margin:"20px",
        zIndex:1,
        position:"relative"
    },
    card2:{
        padding:"20px",
        margin:"20px",
    },
    img_card:{
        width:"100%",
        height:"150px"
    },
    prime_card:{
        margin:"20px",
    },
    img_prime:{
        width:"100%",
        height:"480px"
    },
    link:{
        margin:"10px",
    },
    img_cr:{
        width:"100%",
        height:"600px",
      
    },
}));

export default function Body() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <SlickSlider/>
            <Grid container>
                <Grid item xs={3}>
                <Paper className={classes.card}>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                        <List >
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src={user} />
                                </ListItemAvatar>
                                <ListItemText
                                primary="Hi, Jay"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        
                                        color="textPrimary"
                                    >
                                        Customer since 2017
                                    </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </List>
                        <Typography>Top links for you</Typography>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban1}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban2}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban3}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#">
                        <img src={ban4} className={classes.img_card} />
                        </Link>
                        </Grid>
                    </Grid>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.card}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <List >
                            <ListItem alignItems="flex-start">
                                <Typography>Top picks for your home</Typography>
                            </ListItem>
                        </List>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban1}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban2}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban3}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban4} className={classes.img_card} />
                        </Link>
                        </Grid>
                    <Link className={classes.link}>
                    see more
                    </Link>
                    </Grid>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.card}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <List >
                            <ListItem alignItems="flex-start">
                                <Typography>Amazon Brands & more</Typography>
                            </ListItem>
                        </List>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban1}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban2}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban3}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban4} className={classes.img_card} />
                        </Link>
                        </Grid>
                    <Link className={classes.link}>
                    see more
                    </Link>
                    </Grid>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.card}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <List >
                            <ListItem alignItems="flex-start">
                            <ListItemText
                                primary="Shop on the Amazon App"
                                secondary={
                                    <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        
                                        color="textPrimary"
                                    >
                                        Fast, convenient and secure | Over 17 crore products in your pocket
                                    </Typography>
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                        </List>
                        </Grid>
                    <Link className={classes.link}>
                    Download the Amazon App
                    </Link>
                    </Grid>
                </Paper>
                </Grid>

                <Grid item xs={6}>
                    <div className={classes.prime_card}>
                        <Link href="#" >
                        <img src={prime}  className={classes.img_prime}/>
                        </Link>
                    </div>    
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.card2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <List >
                            <ListItem alignItems="flex-start">
                                <Typography>Top picks for your home</Typography>
                            </ListItem>
                        </List>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban1}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban2}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban3}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban4} className={classes.img_card} />
                        </Link>
                        </Grid>
                    <Link className={classes.link}>
                    see more
                    </Link>
                    </Grid>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.card2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                        <List >
                            <ListItem alignItems="flex-start">
                                <Typography>Top picks for your home</Typography>
                            </ListItem>
                        </List>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban1}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban2}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban3}  className={classes.img_card}/>
                        </Link>
                        </Grid>
                        <Grid item xs={6}>
                        <Link href="#" >
                        <img src={ban4} className={classes.img_card} />
                        </Link>
                        </Grid>
                    <Link className={classes.link}>
                    see more
                    </Link>
                    </Grid>
                </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper className={classes.card2}>
                        
                    </Paper>  
                </Grid>
            </Grid>
        </React.Fragment>
    );
}    
