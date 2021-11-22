import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar,Grid,Typography,Card,CardContent,Button} from '@material-ui/core';
import sale from '../images/template.png';
import sale2 from '../images/t.png';
import sale3 from '../images/mobile.png';
import sale4 from '../images/laptop.png';
import sbi from '../images/sbi.jpg';
import deal from '../images/tmp.png';
import sofa from '../images/sofa.jpeg';
import matt from '../images/matt.jpeg';
import shoe from '../images/shoe.jpeg';
import boat from '../images/boat.jpg';
import tv from '../images/tv.jpeg';
import st from '../images/st.png';
import tp1 from '../images/tp1.png';
import tp2 from '../images/tp2.png';
import tp3 from '../images/tp3.png';
import tp4 from '../images/tp4.png';
import tp5 from '../images/tp5.png';
import tp6 from '../images/tp6.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "blue",
  },
  title: {
    flexGrow: 1,
  },
  sale_i: {
    height: '130px',
  },
  sale_i2: {
    display: 'block',
    margin: '0 auto', 
    height: '50px',
    width: '100px',
    paddingTop: '25px',
    paddingBottom: '10px',
  },
  sale_txt: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '400',
    fontSize: '15px',
  },
  sbi: {
    width: '100%',
    height: '50px',
  },
  deal: {
      width:'100%',
      height: '250px',
  },
  t_center: {
    textAlign:"center",
  },
  mt: {
      marginTop: "10px",
  },
  bt: {
      marginTop: '32px',
      backgroundColor: 'blue',
      color: 'white',
      margin: '0 auto',
      display: 'block',
  },
  tl: {
      color: 'black',
      textAlign: 'center', 
  },
  pr: {
    color: 'green',
    textAlign: 'center',   
},
ty: {
    color: 'gray',
    textAlign: 'center',
    fontSize: '12px',
},
boat: {
    width: '100%',
    height: '290px',
},
pr_img: {
    width: '100%',
    height: '225px',
},
txt_s: {
    fontSize: '10px',
    fontWeight: '1000',
    marginTop: '15px',
    color: 'grey'
},
txt_m: {
    fontSize: '20px',
    fontWeight: '1000',
}

}));

export default function Nav() {
  const classes = useStyles();
  return (
    <div>
        <Toolbar className={classes.mt}>
            <Grid container className={classes.root} >
            <Grid item xs={4}>
                <img src={sale} className={classes.sale_i} />
            </Grid>
            <Grid item xs={8}>
                <Grid container >
                    <Grid item xs={2}>
                        <img className={classes.sale_i2} src={sale2} />
                        <Typography className={classes.sale_txt}>Home Essentials</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.sale_i2} src={sale3} />
                        <Typography className={classes.sale_txt}>Mobiles & Tablets</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.sale_i2} src={sale4} />
                        <Typography className={classes.sale_txt}>Electronics</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.sale_i2} src={sale2} />
                        <Typography className={classes.sale_txt}>Home Essentials</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.sale_i2} src={sale3} />
                        <Typography className={classes.sale_txt}>Mobiles & Tablets</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <img className={classes.sale_i2} src={sale4} />
                        <Typography className={classes.sale_txt}>Electronics</Typography>
                    </Grid>
                </Grid>
                
            </Grid>
            </Grid>
        </Toolbar>

        <Toolbar ><img className={classes.sbi} src={sbi}/></Toolbar>

        <Toolbar className={classes.mt}><img className={classes.deal}  src={deal}/></Toolbar>

        <Toolbar className={classes.mt}>
            <Grid container  >
            <Grid item xs={2}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" className={classes.mt}>Today's Fashion </Typography>
                        <Typography variant="h5" className={classes.t_center} >Deals</Typography>
                        <Button className={classes.bt} variant="contained">View All</Button>
                    </CardContent>
                    <img  src={st}/>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                   
                    <img className={classes.pr_img} src={sofa}/>
                    <Typography className={classes.tl}>Sofas</Typography>
                    <Typography className={classes.pr}>From ₹16,499</Typography>
                    <Typography className={classes.ty}>Fabric & Leatherette</Typography>
                   
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                   
                    <img className={classes.pr_img} src={shoe}/>
                    <Typography className={classes.tl}>Adidas,Nike,Puma</Typography>
                    <Typography className={classes.pr}>Min. 40% off</Typography>
                    <Typography className={classes.ty}>Sports Shoes & more</Typography>
                   
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                   
                    <img className={classes.pr_img} src={tv}/>
                    <Typography className={classes.tl}>Samsung QLED TVs</Typography>
                    <Typography className={classes.pr}>From ₹74,999</Typography>
                    <Typography className={classes.ty}>The Best Lifestyle TV</Typography>
                    
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    
                    <img className={classes.pr_img} src={matt}/>
                    <Typography className={classes.tl}>Mattresses</Typography>
                    <Typography className={classes.pr}>From ₹2,799</Typography>
                    <Typography className={classes.ty}>Peps, Kurlon & More</Typography>
                    
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card>
                    <img className={classes.boat}  src={boat}/>
                   
                </Card>
            </Grid>
            </Grid>
        </Toolbar>
        <Toolbar className={classes.mt} >
        <Grid container  spacing={1}>
            <Grid item xs={4}>
                <Card>
                    <img  src={tp1}/>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <img  src={tp2}/>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <img  src={tp3}/>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <img  src={tp4}/>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <img  src={tp5}/>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <img  src={tp6}/>
                </Card>
            </Grid>
            </Grid> 
        </Toolbar>
        <Toolbar className={classes.mt}>
        <Grid container >
            <Grid item xs={12}>
                <Card>
                <CardContent>
                    <Typography className={classes.txt_m}> Flipkart: The One-stop Shopping Destination</Typography>
                    <Typography className={classes.txt_s}>
                    E-commerce is revolutionizing the way we all shop in India.
                     Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles.
                     Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; 
                     from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances;
                      from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here.
                       For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down.
                    </Typography>
                    <Typography className={classes.txt_s}>
                        What's more, with our year-round shopping festivals and events, our prices are irresistible. We're sure you'll find yourself picking up more than what you had in mind.
                        If you are wondering why you should shop from Flipkart when there are multiple options available to you, well, the below will answer your question.
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
           </Grid> 
        </Toolbar>
    </div>
  );
}


