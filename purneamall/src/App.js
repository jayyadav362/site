import React from 'react';
import Header from './components/header';
import Home from './components/home';
import View from './components/view';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Shop from './components/Shop';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/view/:id">
          <View />
        </Route>
        <Route exact path="/shop">
          <Shop/>
        </Route>
        <Route exact path="/shop/:category">
          <Shop/>
        </Route>
      </Switch>  
    </Router>
  );
}

export default App;
