import React from 'react';
import './App.css';
import {BottomNavigation,BottomNavigationAction,Badge,Avatar} from '@material-ui/core';
import {Alert, AlertTitle,AvatarGroup} from '@material-ui/lab';
import Mailicon from '@material-ui/icons/Mail';

function App() {
  return (
    <div >
      <AvatarGroup max={2}>
      <Avatar  variant="circle">A </Avatar>
      <Avatar  variant="circle">A </Avatar>
      <Avatar  variant="circle">A </Avatar>
      <Avatar  variant="circle">A </Avatar>
      </AvatarGroup>
    </div>
  );
}

export default App;
