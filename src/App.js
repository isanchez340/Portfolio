import React from 'react';
import Bars from './components/progl';
import Buttons from './components/buttons';
import Body from './components/body';
import './App.css';
import avatar from './components/images/avatar.jpg';

function App() {
  return (

    <div className="App">
      <body className="App-bar">
        <div className="Frame">
          <img src={avatar} alt="Avatar" width="157"/>
        </div>
        <p>Irving Sanchez</p>
        <Bars></Bars>
      </body>
      <header className="App-header">
        <p>
          <Buttons></Buttons>
        </p>
        <Body></Body>
      </header>
    </div>
  );
}

export default App;
