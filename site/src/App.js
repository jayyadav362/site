import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbars from './components/Navbars';
import Cards from './components/Cards';
import Offer from './components/Banner';
import Display from './components/Display';
import List from './components/List';
import {Switch,Route, BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
   <div>
      <Navbars/>
      <Router>
        <Switch>
            <Route exact path="/">
                <Offer code="STARTUP"/>
                <Display/>
            </Route>
            <Route path="/cards">
                <Cards/>
            </Route>
            <Route path="/list">
                    <List/>
            </Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
 