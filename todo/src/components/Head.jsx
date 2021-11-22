import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,IconButton,Badge} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import AddIcon from '@material-ui/icons/Add';

const styles = makeStyles(()=>({
    root:{
        width:"50%",
        marginTop:"2%",
        marginLeft:"25%",
    },
    counter:{
        flexGrow:1,
    },
    add:{
        backgroundColor:"white",
    }
}))

const Head = () => {
    const style = styles();
    return(
        <AppBar position="static" className={style.root}>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <div className={style.counter}></div>
                <IconButton edge="start" color="primary" aria-label="menu" className={style.add}>
                    <AddIcon />
                </IconButton>
                <Badge badgeContent={4} color="secondary">
                    <ListIcon />
                </Badge>
            </Toolbar>
        </AppBar>
    )
}
export default Head;