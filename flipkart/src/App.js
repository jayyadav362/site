import React from 'react';
import Navbar from './components/nav.js';
import Body from './components/body.js';
import Footer from './components/footer.js';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: '#f1f3f6',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
