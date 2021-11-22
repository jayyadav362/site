import React from 'react';
import {Toolbar,Paper,Grid,Typography,Card,CardContent,Button,InputBase,Container,Popover,Link,Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import p_img from '../images/payment.png';
import StarsIcon from '@material-ui/icons/Stars';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import HelpIcon from '@material-ui/icons/Help';
import WorkIcon from '@material-ui/icons/Work';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#172337",
    marginTop: '20px',
  },
  f_tm: {
      fontSize: '15px',
      color: 'grey',
      marginTop: '40px',
      marginBottom: '15px',
  },
  f_ts: {
    fontSize: '11px',
    color: 'white',
  },
  br_f: {
      borderTop: '1px solid grey',
      marginTop: '20px',
  },
  ft_b:{
      color: 'white',
      fontSize: '15px',
      fontWeight:'400',
  },
  icon: {
      color: 'yellow',
      width: '20px',
      height: '20px',
      marginBottom: '-3px'
  }
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Toolbar >
                <Grid container >
                    <Grid xs={7}>
                    <Grid container >
                        <Grid xs={3}>
                        <Typography className={classes.f_tm}>ABOUT</Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>ContactUs</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>AboutUs</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Careers</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Careers</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Flipkart Stories</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Press</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Flipkart Wholesale</Link></Typography>
                        </Grid>
                        <Grid xs={3}>
                        <Typography className={classes.f_tm}>ABOUT</Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>ContactUs</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>AboutUs</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Careers</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Careers</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Flipkart Stories</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Press</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Flipkart Wholesale</Link></Typography>
                        </Grid>
                        <Grid xs={3}>
                        <Typography className={classes.f_tm}>ABOUT</Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>ContactUs</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>AboutUs</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Careers</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Careers</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Flipkart Stories</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Press</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Flipkart Wholesale</Link></Typography>
                        </Grid>
                        <Grid xs={3}>
                        <Typography className={classes.f_tm}>ABOUT</Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>ContactUs</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>AboutUs</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Careers</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Careers</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Flipkart Stories</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Press</Link></Typography>
                        <Typography><Link href="#" color="inherit" className={classes.f_ts}>Flipkart Wholesale</Link></Typography>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid xs={5} >
                        <Grid container >
                            <Grid xs={6} >
                                <Typography className={classes.f_tm}>Mail Us:</Typography>
                                <Typography className={classes.f_ts}>Flipkart Internet Private Limited,</Typography>    
                                <Typography className={classes.f_ts}>Buildings Alyssa, Begonia & </Typography>
                                <Typography className={classes.f_ts}> Clove Embassy Tech Village,</Typography>
                                <Typography className={classes.f_ts}>Outer Ring Road, Devarabeesanahalli Village,</Typography>
                                <Typography className={classes.f_ts}> Bengaluru, 560103, </Typography>
                                <Typography className={classes.f_ts}>Karnataka, India </Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography className={classes.f_tm}>Registered Office Address:</Typography>
                                <Typography className={classes.f_ts}>Flipkart Internet Private Limited,</Typography>    
                                <Typography className={classes.f_ts}>Buildings Alyssa, Begonia & </Typography>
                                <Typography className={classes.f_ts}> Clove Embassy Tech Village,</Typography>
                                <Typography className={classes.f_ts}>Outer Ring Road, Devarabeesanahalli Village,</Typography>
                                <Typography className={classes.f_ts}> Bengaluru, 560103, </Typography>
                                <Typography className={classes.f_ts}>Karnataka, India </Typography>
                                <Typography className={classes.f_ts}>CIN : U51109KA2012PTC066107 </Typography>
                                <Typography className={classes.f_ts}>Telephone: 1800 208 9898 </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
        </Toolbar> 
        <Toolbar className={classes.br_f}>
                <Grid container >
                    <Grid xs={6}>
                        <Grid container>
                            <Grid xs={3}><Typography><Link href="#" color="inherit" className={classes.ft_b}><WorkIcon className={classes.icon} /> Sell On Flipkart</Link></Typography></Grid>
                            <Grid xs={3}><Typography><Link href="#" color="inherit" className={classes.ft_b}><StarsIcon className={classes.icon} /> Advertise</Link></Typography></Grid>
                            <Grid xs={3}><Typography><Link href="#" color="inherit" className={classes.ft_b}><CardGiftcardIcon className={classes.icon} /> Gift Cards</Link></Typography></Grid>
                            <Grid xs={3}><Typography><Link href="#" color="inherit" className={classes.ft_b}><HelpIcon className={classes.icon} /> Help Center</Link></Typography></Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={2}><Typography className={classes.ft_b}>© 2007-2020 Flipkart.com</Typography></Grid>
                    <Grid xs={4}><img src={p_img} className={classes.p_img} /></Grid>
                </Grid>    
        </Toolbar>        
    </div>
  );
}