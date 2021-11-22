import React from 'react';
import {Divider,Paper,IconButton,Grid,List,ListItem,ListItemAvatar,Avatar,ListItemText,Typography,Link,Card,CardActions,CardHeader,CardMedia, InputBase} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import user from '../image/user.jpg';
import profile from '../image/profile.jpg';
import profile2 from '../image/profile2.jpg';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
      },
      pad_slide:{
          paddingLeft: "200px",
          marginTop: "90px",

      },
    paper:{
        padding: "15px",
    },
    profile: {
        border: "2px solid red",
        height: "60px",
        width: "60px"
    },
    p_heading:{
        fontSize: "11px",
        color: 'grey',
    },
    pd_side:{
        marginTop: "90px",
        position:"fixed",
        float: "right"
    },
    user: {
        height: "50px",
        width: "50px"
    },
    text:{
        marginLeft: "20px"
    },
    link:{
        fontSize: "12px",
        marginTop: "20px",
        color: "blue",
    },
    media: {
        height: "700px",
        width:"100%",
      },
    card: {
        marginTop: "30px",
        marginBottom: '30px',
    },
    icons:{
        fontSize: '30px',
        color: 'grey',
    },  
    archive: {
        fontSize: '30px',
        color: 'grey',
        marginLeft: "350px"
    },
    searchInput:{
        padding: "10px",
        height: "50px",
        width: "100%",
        fontSize: '12px',
        color: 'black'
    },
    sm_txt: {
        fontSize: "11px",
        color: "#DEDEDE",
        marginLeft: "5px"
    }


}));

export default function Body() {
    const classes = useStyles();
    const settings = {
        infinite: true,
        slidesToShow: 8,
        speed: 500,
        slidesToScroll: 3
      };
    return (
        <React.Fragment>
        <div className={classes.grow}>
         <Grid container  >
            <Grid item xs={7} className={classes.pad_slide}>
                <Paper className={classes.paper}>
                <div >
                    <Slider {...settings}>
                    <div>
                    <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Yadav</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile2} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Bharti</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Yadav</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile2} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Bharti</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Yadav</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile2} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Bharti</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Yadav</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile2} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Bharti</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Yadav</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile2} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Bharti</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Yadav</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile2} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Bharti</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Yadav</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile2} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Bharti</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Yadav</Typography>
                    </div>
                    <div>
                    <Avatar alt="Profile Picture" src={profile2} className={classes.profile} />
                    <Typography className={classes.p_heading}>Jay Bharti</Typography>
                    </div>
                    </Slider>
                </div>
                </Paper>
                <Card className={classes.card}>
                <CardHeader
                    avatar={
                    <Avatar src={profile} />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                    }
                    title="_bharti.jay_j.k_"
                />
                <CardMedia
                    className={classes.media}
                    image={profile}
                    title="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="like" >
                    <FavoriteBorderIcon className={classes.icons} />
                    </IconButton>
                    <IconButton aria-label="comment" >
                    <ChatBubbleOutlineIcon className={classes.icons} />
                    </IconButton>
                    <IconButton aria-label="share" >
                    <SendIcon className={classes.icons}/>
                    </IconButton>
                    <IconButton aria-label="archive" >
                    <BookmarkBorderIcon className={classes.archive} />
                    </IconButton>
                </CardActions>
                <Divider />
                <InputBase placeholder="Add a comment..." className={classes.searchInput} />
                </Card>
                <Card className={classes.card}>
                <CardHeader
                    avatar={
                    <Avatar src={profile} />
                    }
                    action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                    }
                    title="_bharti.jay_j.k_"
                />
                <CardMedia
                    className={classes.media}
                    image={profile2}
                    title="Paella dish"
                />
                <CardActions disableSpacing>
                    <IconButton aria-label="like" >
                    <FavoriteBorderIcon className={classes.icons} />
                    </IconButton>
                    <IconButton aria-label="comment" >
                    <ChatBubbleOutlineIcon className={classes.icons} />
                    </IconButton>
                    <IconButton aria-label="share" >
                    <SendIcon className={classes.icons}/>
                    </IconButton>
                    <IconButton aria-label="archive" >
                    <BookmarkBorderIcon className={classes.archive} />
                    </IconButton>
                </CardActions>
                <Divider />
                <InputBase placeholder="Add a comment..." className={classes.searchInput} />
                </Card>
                
            </Grid>
            <Grid item xs={5} >
            <div className={classes.pd_side}>
                <List className={classes.root}>
                    <ListItem alignItems="flex-start" className={classes.text}>
                        <ListItemAvatar>
                        <Avatar  src={user} className={classes.user}  />
                        </ListItemAvatar>
                        <ListItemText className={classes.text}
                        primary="_bharti.jay_j.k_"
                        secondary={
                            <Typography className={classes.p_heading}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Jay Yadav
                            </Typography>
                        }
                        />
                        <Link>
                        <Typography  className={classes.link}>Switch</Typography>
                        </Link>
                    </ListItem>
                    <ListItem >
                        <Typography  style={{fontSize: "15px",marginLeft: "15px",color: "grey"}}>Suggestions For You</Typography>
                        <Typography style={{fontSize: "12px",marginLeft: "100px",}}>See All</Typography>
                    </ListItem>
                    <ListItem alignItems="flex-start" className={classes.text}>
                        <ListItemAvatar>
                        <Avatar  src={profile} />
                        </ListItemAvatar>
                        <ListItemText 
                        primary="raichand259"
                        secondary={
                            <Typography className={classes.p_heading}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Followed by yadavprince976
                            </Typography>
                        }
                        />
                        <Link>
                        <Typography  className={classes.link}>Follow</Typography>
                        </Link>
                    </ListItem>
                    <ListItem alignItems="flex-start" className={classes.text}>
                        <ListItemAvatar>
                        <Avatar  src={profile2} />
                        </ListItemAvatar>
                        <ListItemText 
                        primary="sonu_kumar957"
                        secondary={
                            <Typography className={classes.p_heading}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Followed by deepakyadav3198
                            </Typography>
                        }
                        />
                        <Link>
                        <Typography  className={classes.link}>Follow</Typography>
                        </Link>
                    </ListItem>
                    <ListItem alignItems="flex-start" className={classes.text}>
                        <ListItemAvatar>
                        <Avatar  src={profile} />
                        </ListItemAvatar>
                        <ListItemText 
                        primary="raichand259"
                        secondary={
                            <Typography className={classes.p_heading}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Followed by yadavprince976
                            </Typography>
                        }
                        />
                        <Link>
                        <Typography  className={classes.link}>Follow</Typography>
                        </Link>
                    </ListItem>
                    <ListItem alignItems="flex-start" className={classes.text}>
                        <ListItemAvatar>
                        <Avatar  src={profile2} />
                        </ListItemAvatar>
                        <ListItemText 
                        primary="sonu_kumar957"
                        secondary={
                            <Typography className={classes.p_heading}
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Followed by deepakyadav3198
                            </Typography>
                        }
                        />
                        <Link>
                        <Typography  className={classes.link}>Follow</Typography>
                        </Link>
                    </ListItem>
                    <ListItem className={classes.text}>
                        <Typography className={classes.sm_txt}>About</Typography>
                        <Typography className={classes.sm_txt}>Help</Typography>
                        <Typography className={classes.sm_txt}>Press</Typography>
                        <Typography className={classes.sm_txt}>API</Typography>
                        <Typography className={classes.sm_txt}>Jobs</Typography>
                        <Typography className={classes.sm_txt}>Privacy</Typography>
                        <Typography className={classes.sm_txt}>Terms</Typography>
                        <Typography className={classes.sm_txt}>Locations</Typography>
                    </ListItem>
                    <ListItem className={classes.text}>
                        <Typography className={classes.sm_txt}>Top Accounts</Typography>
                        <Typography className={classes.sm_txt}>Hashtags</Typography>
                        <Typography className={classes.sm_txt}>Language</Typography>
                        <Typography className={classes.sm_txt}>English</Typography>
                    </ListItem >
                    <ListItem className={classes.text}>
                        <Typography style={{fontSize: "12px",color: "#DEDEDE"}}>© 2021 INSTAGRAM FROM FACEBOOK</Typography>
                    </ListItem>
                </List>
            </div>
            </Grid>       
         </Grid>
         </div>
        </React.Fragment>
    );
}    
