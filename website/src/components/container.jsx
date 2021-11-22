import { Button, Card, CardActions, CardContent, CardMedia, Grid, Paper,Typography } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import pic from '../assets/pic.webp';
import Box from './box';

const styles =makeStyles(()=>({
    contain:{
        width:"90%",
        marginLeft:"5%",
        marginTop:20,
    }
}));

const states = [
    {
        'size':3,
        'img': pic,
        'heading': "hello"
    },
    {
        'size':3,
        'img': pic,
        'heading': "jay"
    },
    {
        'size':3,
        'img': pic,
        'heading': "world"
    },
    {
        'size':3,
        'img': pic,
        'heading': "cws"
    },
];

const Container = () => {
    //hook
    const [box,setBox] = useState(states);

    const style = styles();
    return (
        <React.Fragment>
            <Grid container spacing={2} className={style.contain}>
                {box.map((value,key) =>(
                    <Box key={key} size={value.size} img={value.img} heading={value.heading}/>
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default Container;