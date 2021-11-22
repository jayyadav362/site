import Header from './components/header';
import Body from './components/body';

import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div style={{backgroundColor:"#EAEDED",}}>
      <Body />
      </div>
    </React.Fragment>
  );
}

export default App;
