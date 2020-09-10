import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './pages/Header';
import Home from "./pages/Home";
import Restaurant from './pages/Restaurant';
import Maps from './pages/Maps';
import Error from './pages/Error';
import { store } from './pages/Store'; // import our store from Store.js


/*
*   Whenever we wish to access our global state, we will pass it down as a prop for the component
*   This allows us to access it anywhere.
*
*   EXAMPLE:
*   - Create a new component and need to store restraunts?
    - pass store={store} to access global state data.
    - access store by using props.store
*/

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
            <Restaurant store={store} />
          </Route>
          <Route path = "/Maps">
            <Maps store={store} />
          </Route>
          <Route path = "/Error">
            <Error />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}