import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} /> 
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
