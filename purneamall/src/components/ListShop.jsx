import React, { useState } from "react";
import {List, ListItem, ListItemText, Divider} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
}));


function ListShop(props){
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.root}>
                <List component="nav">
                        <ListItem>
                            <ListItemText>
                                <Link style={{textDecoration: "none",fontSize:15,color: "skyblue",textAlign:"center"}} to={{pathname: `/shop/${props.category}`}}>{props.category}</Link>
                            </ListItemText>
                            
                        </ListItem>
                        <Divider/>
                </List>
            </div>
        </React.Fragment>
    )
}

export default ListShop