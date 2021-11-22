import React from 'react';
import {Paper,Button,Grid,List,ListItem,ListItemAvatar,Avatar,ListItemText,Typography,Link,Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        flexGrow: 1,
        backgroundColor: '#F4F6F8',
    }   

}));

export default function Body() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.footer}>
            <Grid container >
                <Grid item xs={2}>
                    <Typography>ABOUT</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>HELP</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>POLICY</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography>SOCILAL</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>CAREERS</Typography>
                </Grid>
            </Grid>
            </div>
        </React.Fragment>
    );
}    
