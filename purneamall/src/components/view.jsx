import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar,Typography,Button,Box, Grid,} from '@material-ui/core';
import p1 from '../image/p1.jpg';
import p2 from '../image/p2.jpg';
import p3 from '../image/p3.jpg';
import p4 from '../image/p4.jpg';
import CarD from '../components/card';
import {useParams} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  ban1: {
      width: "100%",
      height: "600px",
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


export default function View(props) {
  const classes = useStyles();
  const [cd,cardSet] = useState(card);
  const [total, setTotal] = useState(1)
  let {id} = useParams();

  const increase = () => {
    setTotal(total + 1)
  }

  const decrease = () => {
    setTotal(total - 1)
  }
  const pro = card.find(p => p.id == id)
  const related = card.filter(p => p.id != id & p.category == pro.category);
  
  return (
      <React.Fragment>
    <div className={classes.grow}>

    <Grid container spacing={2} style={{width:"70%",marginLeft:"15%"}}>
        <Grid item xs={6}>
            <img src={pro.image} className={classes.ban1}  />
        </Grid>
        <Grid item xs={4}>
            <Typography >
                <Box fontSize={25} fontWeight="bold" marginTop="130px">{pro.title}</Box>
            </Typography>
            <Typography>
                <Box fontSize={25} marginTop="30px">{pro.price}</Box>
            </Typography>
            <Typography>
                <Box fontSize={15} marginTop="10px">{pro.category}</Box>
            </Typography>
            <Toolbar style={{marginLeft:"-25px"}}>
                <Button size="small" variant="contained" color="primary" onClick ={() => increase()} >+</Button>
                <Typography  style={{marginLeft:"10px"}}>{total}</Typography>
                <Button size="small" variant="contained" color="secondary" style={{marginLeft:"10px"}} onClick ={() => decrease()} >-</Button>
            </Toolbar>
            <Button size="small" variant="contained" >ADD TO CART</Button>
        </Grid>
        
    </Grid>
    <Typography><Box marginLeft="15%" fontSize="20px" fontWeight="bold">RELATED PRODUCTS</Box></Typography>
    <Grid container spacing={2} style={{width:"80%",marginLeft:"10%"}}>
        {related.map((value,key) =>( 
            <Grid item xs={3}>
            <CarD id={value.id} category={value.category} qty={value.qty} image={value.image} title={value.title} price={value.price} />
            </Grid>
        ))}
    </Grid>
    
    </div>
    </React.Fragment>
  );
}
