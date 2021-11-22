import { Button, Card, CardActions, CardContent, CardMedia, Grid,Typography } from '@material-ui/core';
import React, { useState } from 'react';

const Box = (props) => {
    return (
        <React.Fragment>
                <Grid item  xs={props.size}>
                    <Card variant="outlined">
                        <CardMedia component="img" image={props.img}></CardMedia>
                        <CardContent>
                            <Typography variant="h2">{props.heading}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary">Click</Button>
                        </CardActions>
                    </Card>
                </Grid>
        </React.Fragment>
    )
}

export default Box;