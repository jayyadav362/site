import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import {Typography,Card,CardMedia, CardContent} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
      boxShadow: "none",
      marginTop: "10px"
  },
  t_text: {
      fontSize: "11px",
      textAlign: "center"
  },
  p_text: {
      fontSize: "10px",
      textAlign: "center",
      color: "green"
  },
  image: {
      width: "100%",
      height: "100px"
  }
}));


export default function CarD(props) {
  const classes = useStyles();
  return (
      <React.Fragment> 
            <Card className={classes.card} style={{border: "1px solid black"}}>
                <CardMedia component="img" image={props.image} className={classes.image}></CardMedia>
                <CardContent style={{padding:"0px",margin: "0px"}}>
                    <Typography className={classes.t_text}>{props.title}</Typography>
                    <Typography className={classes.p_text}>₹{props.price}</Typography>
                </CardContent>
            </Card>
    </React.Fragment>
  );
}
