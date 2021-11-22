import React from 'react';
import Header from './components/header';
import Body from './components/body';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
      body: {
          backgroundColor: "#FAFAFA",
      }

}));


function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header/>
      <div className={classes.body}>
      <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
