import React from 'react';
import {Paper,Button,Grid,List,ListItem,ListItemAvatar,Avatar,ListItemText,Typography,Link,Card} from '@material-ui/core';
import ban1 from '../image/ban1.jpg';
import ban2 from '../image/ban2.jpg';
import ban3 from '../image/ban3.jpg';
import ban4 from '../image/ban4.jpg';
import ban5 from '../image/ban5.jpg';
import ban6 from '../image/ban6.jpg';
import ban7 from '../image/ban7.jpg';
import ban8 from '../image/ban8.jpg';
import ban9 from '../image/ban9.png';
import ban10 from '../image/ban10.jpg';
import ban11 from '../image/ban11.jpg';
import ban12 from '../image/ban12.jpg';
import ban13 from '../image/ban13.jpg';
import ban14 from '../image/ban14.jpg';
import ban15 from '../image/ban15.jpg';
import ban16 from '../image/ban16.jpg';
import ban17 from '../image/ban17.png';
import ban18 from '../image/ban18.jpg';
import ban19 from '../image/ban19.jpg';
import ban20 from '../image/ban20.jpg';



import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
      },
    ban:{
        width: '95%',
    },
    card: {
        width: '90%',
    } 

}));

export default function Body() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban1}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban2}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban3}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban4}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban5}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban6}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban7}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban8}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban9}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban10}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban11}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban12}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban13}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban14}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban15}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={6}>
                    <center>
                    <Link href="#" >
                        <img src={ban16}  className={classes.card} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban17}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban18}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban19}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
                <Grid item xs={12}>
                    <center>
                    <Link href="#" >
                        <img src={ban20}  className={classes.ban1} />
                    </Link> 
                    </center>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}    
