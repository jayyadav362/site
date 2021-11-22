import React from 'react';
import Carousel from 'react-material-ui-carousel';
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
import img4 from '../image/img4.jpg';
import img5 from '../image/img5.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img_cr:{
        width:"100%",
        height:"600px",
      
    },
}));

 
function Example(props){
    var items = [
        {
            img:img1
        },
        {
            img:img2
        },
        {
            img:img3
        },
        {
            img:img4
        },
        {
            img:img5
        },
       
    ]
 
    return (
        <React.Fragment>
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
        </React.Fragment>
    )
}
 
function Item(props)
{
    const classes = useStyles();
    return (
        <React.Fragment>
        <div>
            <img src={props.item.img} className={classes.img_cr} />
        </div>
        </React.Fragment>
    )
}

export default Example;