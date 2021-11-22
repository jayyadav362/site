import React from 'react';
import php from '../images/php-1-logo.png';
import django from '../images/django-logo-negative.png';
import react from '../images/220px-React-icon.svg.png';
import python from '../images/python.jpg';
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar,Container,Grid,Paper,Typography,Box,CardActionArea,CardMedia,CardContent,Card,} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
   coupn: {
       backgroundColor: "#ef6c00",
       
   },
   coupn_txt: {
       color: 'white',
       textAlign: 'center',
       flexGrow: 1,
   },
   desc: {
       backgroundColor: '#006064',
   },
   paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  l_txt: {
    color: 'white',
    flexGrow: 1,
    fontWeight: '1000',
    fontSize: '30px',
},
cont: {
    marginTop: '30px',
    marginBottom: '50px',
    flexGrow: 1,
},
st: {
    marginTop: '-48px',
},
mt: {
    marginTop: '20px',
},
cat_txt: {
    textAlign: 'center',
    flexGrow: 1,
    marginTop: '10px',
    fontSize: '25px',
    fontWeight: '300',
},
cat_txt_sm: {
    textAlign: 'center',
    flexGrow: 1,
    fontSize: '11px',
    fontWeight: '300',
},
  }));

  export default function Body() {
    const classes = useStyles();
  
    return (
    <React.Fragment>
        <Toolbar className={classes.coupn}>
            <Typography  className={classes.coupn_txt}>LIMITED OFFER: ₹100/- FLAT DISCOUNT ON ANY COURSES. USE "BOOST" COUPON ENROLL NOW</Typography>
        </Toolbar>
        <Toolbar className={classes.desc}>
          <Container className={classes.cont}>
           <Grid container spacing={3}>
           <Grid item xs={12} sm={1} ></Grid>
            <Grid item xs={12} sm={4} >
                <Box> <Typography variant="h1" className={classes.l_txt}>LEARN </Typography></Box>
                <Box> <Typography variant="h1" className={classes.l_txt}>COMPUTER </Typography></Box>
                <Box> <Typography variant="h1" className={classes.l_txt}>PROGRAMMING </Typography></Box>
                <Box> <Typography variant="h1" className={classes.l_txt}>FOR INDUSTRY</Typography></Box>

            </Grid>
            <Grid item xs={12} sm={6} className={classes.mt}>
            <Paper className={classes.paper}>Code With SadiQ dispenses professional computer training.
             The training emphasizes on hands-on learning to make the students an ace in facing the various IT challenges of the real world.
             We will provide you with industry leading educational programs, starting from the basic courses to advanced professional courses. 
             The fundamental success factor of this institution is the competent professionals who seize the opportunity to learn about new technologies.</Paper>
            </Grid>
            <Grid item xs={12} sm={1} ></Grid>
            <Grid item xs={12} sm={1} ></Grid>
            <Grid item xs={12} sm={4} className={classes.st}>
                <Paper className={classes.paper}>
                    <Box><Typography >1500+ Learners</Typography></Box>
                    <Box><Typography >300+ Stories</Typography></Box>
                    <Box><Typography >35+ Technologies</Typography></Box>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>We Believe: Knowledge is not skill. Knowledge plus ten thousand times is skill.</Paper>
            </Grid>
          </Grid>
         </Container>
        </Toolbar>
        <Typography  className={classes.cat_txt}>Industrial Training</Typography>
        <Typography className={classes.cat_txt_sm}>Grow your skills for industry 4.0</Typography>
        <Toolbar>
            <Container className={classes.cont}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            image={php}
                            title="Php"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="p" component="h4" className={classes.mt}>
                            Web Development Using Codeigniter & Mysqli (Online)
                            </Typography>
                            <Typography variant="p" color="textSecondary" component="p" className={classes.mt}>
                            Duration: 6 Weeks
                            </Typography>
                            <Typography variant="p" color="textSecondary" component="p">
                            No of Assigments: 10
                            </Typography>
                            <Box color="success.main" className={classes.mt}>₹6500</Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            image={django}
                            title="django"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="p" component="h4" className={classes.mt}>
                            Python Django + SQLite Web Development (Online)
                            </Typography>
                            <Typography variant="p" color="textSecondary" component="p" className={classes.mt}>
                            Duration: 6 Weeks
                            </Typography>
                            <Typography variant="p" color="textSecondary" component="p">
                            No of Assigments: 12
                            </Typography>
                            <Box color="success.main" className={classes.mt}>₹6500</Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            image={react}
                            title="react"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="p" component="h4" className={classes.mt}>
                            Django + ReactJs API Full Stack Development (Online)
                            </Typography>
                            <Typography variant="p" color="textSecondary" component="p" className={classes.mt}>
                            Duration: 6 Weeks
                            </Typography>
                            <Typography variant="p" color="textSecondary" component="p">
                            No of Assigments: 12
                            </Typography>
                            <Box color="success.main" className={classes.mt}>₹6500</Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>

                    <Grid item xs={12} sm={3} >
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            image={python}
                            title="python"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="p" component="h4" className={classes.mt}>
                            Advance Django (Online) Only For Django Developers
                            </Typography>
                            <Typography variant="p" color="textSecondary" component="p" className={classes.mt}>
                            Duration: 10 Weeks
                            </Typography>
                            <Typography variant="p" color="textSecondary" component="p">
                            No of Assigments: 4
                            </Typography>
                            <Box color="success.main" className={classes.mt}>₹700</Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                </Grid>
            </Container>  
        </Toolbar>
    </React.Fragment>
    );
  }