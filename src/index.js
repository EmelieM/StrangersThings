import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
  } from 'react-router-dom';

import {Header,
Login,
Register,
// NewPosts,
// Profile,
// Home,
// Search
} from "./components";

const App = () => {
const [posts, setPosts] = useState([])

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [isLoading, setIsLoading] = useState(false)



return (
  <div id="App">
    <Header />

    <nav className="navBar">
    <Link className="navBarLink" to="/login">
      Login
    </Link>
    <Link className="navBarLink" to="/register">
      Register
    </Link>
    </nav>

    <Switch>
      <Route path="/login">
        {" "}
        <Login setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
      </Route>
      <Route path="/register">
        {" "}
        <Register setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
      </Route>
    </Switch>

  </div>
)

}


ReactDOM.render(
  <Router>
  <App />
  </Router>,
  document.getElementById('root')
);