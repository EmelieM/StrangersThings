import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
  } from 'react-router-dom';

import {Header,
// Login,
// Navbar,
// NewPosts,
// Profile,
// Home
} from "./components";

const App = () => {
return (
  <div id="App">
    <Header />
  </div>
)

}


ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('root')
);