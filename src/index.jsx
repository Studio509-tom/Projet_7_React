import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './variables.css';
import './index.css';

import Header from './components/Header';
import Footer from './components/Footer/footer'

import Home from './pages/Home/index'
import Information from './pages/Propos/index'
import Error from './pages/Error/index';

//!Route
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/information">
          <Information  />
        </Route>
        <Route>
          <Error/>
        </Route>
      </Switch>
      
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)