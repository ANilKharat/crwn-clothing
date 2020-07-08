import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage} /> 
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
