import React from 'react';
import {AppBar, Button, Toolbar, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const usestyles = makeStyles((theme)=>({
  root:{
    flexGrow:1,
    backgroundColor:"black",
  },
  title:{
    flexGrow:1,

  }
}))

function Header() {
  const style = usestyles();
  return (
    <React.Fragment>
      <AppBar position="static" className={style.root}>
        <Toolbar>
          <Typography className={style.title} variant="h6">Hello</Typography>
          <Button variant="contained">jay</Button>
        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
}

export default Header;
