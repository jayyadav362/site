import React from 'react';
import Header from './components/header';
import Body from './components/body';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/"><Body/></Route>
          <Route exact path="/:category"><Body/></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
