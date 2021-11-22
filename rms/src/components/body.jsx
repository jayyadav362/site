import React,{useState} from 'react';
import {Button,Typography, Grid,List,ListItem,ListItemText,ListSubheader,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Category from '../components/category';
import Data from '../components/data';
import {useParams,Link,useLocation} from 'react-router-dom';
import CarD from '../components/card';

const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: "skyblue",
    },
    cat_side: {
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 532,
    },
    bill_side: {
      width: '100%',
      position: 'relative',
      overflow: 'auto',
      maxHeight: 450,
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
    link: {
        fontSize: "12px",
        textDecoration: "none",
        color: "grey",
    },
    t_text: {
        fontSize: "11px",
    },
    ['@media print']: {
        hide_print: {
          display: "none !important",
        }
      }

  }));

export default function Body(){
    const classes = useStyles();
    const [cat,catSet] = useState(Category); 
    const [data,dataSet] = useState(Data);
    const [bill,billSet] = useState([]);

    //Total Amount
    const Total = bill.reduce((total, bill) => total + bill.price*bill.qty, 0);

    // decrease qty
    const decrease = (value) => () => {
        if(bill.some((e) => e.id === value.id)){
            if(bill.some((e) => e.qty == 1)){
                billSet(bill.filter(item => item.id !== value.id))
            }
            else{
            let newState = [...bill];
            newState[value.id-1].qty -= 1;
            billSet(newState);
            }
        }
    };

    //Data add to bill
    const handleClick = (value) => () => {
        if(!bill.some((e) => e.id === value.id)){
            billSet([...bill,value])
        }
        else{
            let newState = [...bill];
            newState[value.id-1].qty += 1;
            billSet(newState);
    
        } 
    };

    //Remove data from bill 
    const handleRemoveItem = id => {
        billSet(bill.filter(item => item.id !== id))
    };

    //Get category from url
    let {category} = useParams();

    //Path Location match
    const location = useLocation();
    let filters;
        if ( location.pathname == `/${category}`){
            filters = data.filter(p =>  p.category == category);
        }
        else if (location.pathname == `/`) {
            filters = data;
        }; 

    return(
        <React.Fragment>
            <div>
            <Grid container spacing={1} >
                <Grid item xs={2} className={classes.hide_print}>
                <List className={classes.cat_side} subheader={<li />} >
                    <li className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>Category</ListSubheader>
                        <ListItem >
                            <ListItemText ><Link className={classes.link} to={{pathname: `/`}}>All Product</Link></ListItemText>
                        </ListItem>
                        {cat.map((c,key) =>(
                        <ListItem >
                            <ListItemText ><Link className={classes.link} to={{pathname:`/${c.name}`}}>{c.name}</Link></ListItemText>
                        </ListItem>
                        ))}
                    </ul>
                    </li>
                </List>
                </Grid>
                <Grid item xs={6} className={classes.hide_print}>
                    <Grid container spacing={1} className={classes.cat_side} style={{margin:0}}>
                        {filters.map((d,key)=>(
                        <Grid item xs={3} key={key}>
                            <Link className={classes.link} onClick={handleClick(d)} >
                                <CarD title={d.title} image={d.image} price={d.price}  />
                            </Link>
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <TableContainer component={Paper} className={classes.bill_side}>
                        <Table  aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>name</TableCell>
                                    <TableCell align="right">price</TableCell>
                                    <TableCell align="center">Qty</TableCell>
                                    <TableCell align="right">Total</TableCell>
                                    <TableCell align="right" className={classes.hide_print}>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bill.map((b,key)=>(
                                <TableRow  key={key}>
                                    <TableCell className={classes.t_text}>{b.title}</TableCell>
                                    <TableCell align="right" className={classes.t_text}>{b.price}</TableCell>
                                    <TableCell align="center" className={classes.t_text} >
                                        <Link className={classes.hide_print} style={{textDecoration:"none",fontSize:"15px",border:"1px solid black",color:"red",marginRight:"5px",paddingLeft:"7px",paddingRight:"7px"}}  onClick={decrease(b)} >-</Link>
                                        {b.qty}
                                        <Link className={classes.hide_print} style={{textDecoration:"none",fontSize:"15px",border:"1px solid black",color:"blue",marginLeft:"5px",paddingLeft:"5px",paddingRight:"5px"}} onClick={handleClick(b)} >+</Link>
                                    </TableCell>
                                    <TableCell align="right" className={classes.t_text}>{b.price*b.qty}</TableCell>
                                    <TableCell align="right" className={classes.hide_print}>
                                        <Button style={{borderRadius: "20px",}} size="small" variant="contained" color="secondary" onClick={() =>handleRemoveItem(b.id)}>X</Button>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography style={{fontSize:"30px",marginTop:"5px"}}>Total: {Total}</Typography>
                    <Button className={classes.hide_print} position="fixed" style={{width: "100%",}}  variant="contained" color="primary" onClick={() => window.print()}>PRINT BILL</Button>
                </Grid>
            </Grid>
            </div>
        </React.Fragment>
    )
}