import React from "react";
import {IconButton} from '@material-ui/core';
import Slider from "react-slick";
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';
import img5 from '../image/img5.jpg';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    img_cr:{
        width:"100%",
        height:"600px",
        
      
    },
    nArrow:{
        zIndex:1,
        position:"relative",
        backgroundColor:"red",
    }
}));
 
export default function SimpleSlider() {
    const classes = useStyles();
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
       
    };
    var items = [{img:img1},{img:img2},{img:img3},{img:img4},{img:img5},]

  return (
    <Slider {...settings}>
        {items.map( (item, i) =>
         <div>
            <img src={item.img} key={i} className={classes.img_cr} />
         </div>
         )}
    </Slider>
  );
}