import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Grid} from '@material-ui/core';
import ban1 from '../image/ban1.jpg';
import CarD from '../components/card';
import p1 from '../image/p1.jpg';
import p2 from '../image/p2.jpg';
import p3 from '../image/p3.jpg';
import p4 from '../image/p4.jpg';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  ban1: {
      width: "100%",
      height: "390px",
  }
}));

const card = [
    {
        id: 1,
        title: "Fortune Soya Health Refined Soyabean Oil (Pouch)",
        image: p1,
        price: "₹116.80",
        qty: 5,
        category: "Oil"
    },
    {
        id: 2,
        title: "Dhara Mustard Oil, 1 Lt (Pouch)",
        image: p2,
        price: "₹134.50",
        qty: 8,
        category: "Oil"
    },
    {
        id: 3,
        title: "Everest Turmeric Powder/Haldi",
        image: p3,
        price: "₹26-₹52",
        qty: 10,
        category: "Masala"
    },
    {
        id: 4,
        title: "Red Masoor Dal",
        image: p4,
        price: "₹71.80",
        qty: 15,
        category: "Dal"
    },

]

export default function Home() {
  const classes = useStyles();
  const [cd,cardSet] = useState(card);
  
  return (
      <React.Fragment>
    <div className={classes.grow}>
    <img src={ban1} className={classes.ban1}  />
    <Typography style={{textAlign:"center",color:"#40198B",fontSize:"25px",fontWeight:"bold"}}>WEEKLY FEATURED PRODUCTS</Typography>
    <Grid container spacing={2} style={{width:"80%",marginLeft:"10%"}}>
    
        {cd.map((value,key) =>( 
            <Grid item xs={3}>
            <CarD id={value.id} category={value.category} qty={value.qty} image={value.image} title={value.title} price={value.price} />
            </Grid>
        ))}
    </Grid>
    </div>
    </React.Fragment>
  );
}
