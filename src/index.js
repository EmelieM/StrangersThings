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
NewPost,
// Profile,
Home,
// Search
} from "./components";

import { clearCurrentUser, getToken } from './auth'

//

const App = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [isLoading, setIsLoading] = useState(false)
const [allPosts, setAllPosts] = useState([]);

useEffect(()=>{
  if (getToken()){
    setIsLoggedIn(true)
  }
}, [])

return (
  <div id="App">
    <Header />

    {isLoggedIn===false ? <nav className="navBar">
    <Link className="navBarLink" to="/">
      Home
    </Link>
    <Link className="navBarLink" to="/login">
      Login
    </Link>
    <Link className="navBarLink" to="/register">
      Register
    </Link>
    </nav>

    :

    <nav className="navBar">
    <Link className="navBarLink" to="/">
      Home
    </Link>
    {/* <Link className="navBarLink" to="/Profile">Profile</Link> */}
    <Link className="navBarLink" to="/"
    onClick={(event)=>{clearCurrentUser()}}>Logout</Link>
    <Link className="navBarLink" to="/NewPost">
      Sell a thing
    </Link>
    </nav>}

    <Switch>
      <Route path="/login">
        {" "}
        <Login setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
      </Route>
      <Route path="/register">
        {" "}
        <Register setIsLoading={setIsLoading} setIsLoggedIn={setIsLoggedIn} />
      </Route>
      <Route path="/NewPost">
        {" "}
        <NewPost allPosts={allPosts} setAllPosts={setAllPosts} setIsLoading={setIsLoading}/>
      </Route>
      {/* <Route path="/Profile">
        {" "}
        <Profile />
      </Route> */}
      <Route path="/">
        {" "}
        <Home allPosts={allPosts} setAllPosts={setAllPosts}/>
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