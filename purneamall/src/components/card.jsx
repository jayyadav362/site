import React,{useState} from 'react';
import {  makeStyles } from '@material-ui/core/styles';
import {Button,Toolbar,Typography,CardActions,Card,CardMedia, CardContent} from '@material-ui/core';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
      boxShadow: "none",
      marginTop: "10px"
  },
  t_text: {
      fontSize: "12px",
      textAlign: "center"
  },
  p_text: {
      fontSize: "15px",
      textAlign: "center"
  },
  image: {
      width: "100%",
      height: "300px"
  }
}));


export default function CarD(props) {
  const classes = useStyles();
  const [total, setTotal] = useState(1)

  const increase = () => {
    setTotal(total + 1)
  }

  const decrease = () => {
    setTotal(total - 1)
  }
  
  return (
      <React.Fragment> 
            <Card className={classes.card}>
                <Link to={{pathname: `/view/${props.id}`}} >
                    <CardMedia component="img" image={props.image} className={classes.image}></CardMedia>
                </Link>
                <CardContent>
                    <Typography className={classes.t_text}>{props.title}</Typography>
                    <Typography className={classes.p_text}>{props.price}</Typography>
                    <Typography className={classes.t_text}>{props.category}</Typography>
                    <Typography className={classes.t_text}>{props.id}</Typography>

                </CardContent>
                <CardActions>
                    <Toolbar style={{marginLeft: "5%"}}>
                        <Button size="small" variant="contained" color="primary" onClick ={() => increase()} >+</Button>
                        <Typography className={classes.p_text} style={{marginLeft:"10px"}}>{total}</Typography>
                        <Button size="small" variant="contained" color="secondary" style={{marginLeft:"10px"}} onClick ={() => decrease()} >-</Button>
                    </Toolbar>
                </CardActions>
            </Card>
    </React.Fragment>
  );
}
