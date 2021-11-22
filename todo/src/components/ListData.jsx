import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar,List,ListItem,ListItemAvatar,ListItemSecondaryAction,ListItemText,IconButton,Grid,TextField} from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "50%",
    marginLeft: "25%",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function generate(element) {
  return [0, 1, 2,3,4.5].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function InteractiveList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
            <form className={classes.form} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Standard" />
            </form>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
