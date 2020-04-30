import React from 'react';
import logo from './logo.svg';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
      <Link to="/shop">Shop</Link>
    </div>
  );
}

export default App;
