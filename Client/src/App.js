import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './pages/Header';
import Home from "./pages/Home";
import Restaurant from './pages/Restaurant';
import Meals from './pages/Meals';
import Nutritions from './pages/Nutritions';

export default function App() {
  return (
    <Router>
      <div className = "App">
        <Header />
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/Restaurants">
            <Restaurant />
          </Route>
          <Route path = "/Meals">
            <Meals />
          </Route>
          <Route path = "/Nutritions">
            <Nutritions />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}