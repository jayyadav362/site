import React, { useState } from 'react';
import {Grid,List, ListItem, ListItemText, Divider} from '@material-ui/core';
import ListShop from './ListShop';
import CarD from './card';
import {makeStyles} from '@material-ui/core/styles';
import {useParams,Link,useLocation} from 'react-router-dom';

import p1 from '../image/p1.jpg';
import p2 from '../image/p2.jpg';
import p3 from '../image/p3.jpg';
import p4 from '../image/p4.jpg';

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

const cat = [
    {category:"Dal"},
    {category:"Oil"},
    {category:"Masala"}
]

function Shop(){
    const [list_cat, ListCat] = useState(cat);
    let {category} = useParams();
    const location = useLocation();
    let filters;
        if ( location.pathname == `/shop/${category}`){
            filters = card.filter(p =>  p.category == category);
        }
        else if (location.pathname == `/shop`) {
            filters = card;
        }

    return(
        <React.Fragment>
            <Grid container style={{width:"90%",marginLeft:"5%"}}>
                <Grid item xs={2}>
                    <List component="nav">
                        <ListItem>
                            <ListItemText>
                                <Link style={{textDecoration: "none",fontSize:15,color: "skyblue"}} to="/shop">All</Link>
                            </ListItemText>
                        </ListItem>
                        <Divider/>
                    </List>
                    {list_cat.map((l,key) => (
                        <ListShop category={l.category} />
                    ))}
                </Grid>
                <Grid item xs={10}>
                    <Grid container> 
                        {filters.map((p, key)=>(
                            <Grid item xs={3}>
                                <CarD id={p.id} image={p.image} title={p.title} price={p.price} category={p.category}/>
                            </Grid> 
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Shop;