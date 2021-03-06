import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { fetchAllPosts } from "./api";
import "./index.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import {
  Header,
  Login,
  Register,
  NewPost,
  Profile,
  Home,
  SinglePost,
  SinglePostPage,
  Search,
} from "./components";

import { clearCurrentUser, getToken } from "./auth";

//

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [willDeliver, setDeliver] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchAllPosts(setAllPosts);
  }, []);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div id="App">
      <Header />
      {isLoggedIn === false ? (
        <nav className="navBar">
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
      ) : (
        <nav className="navBar">
          <Link className="navBarLink" to="/">
            Home
          </Link>
          <Link className="navBarLink" to="/Profile">
            Profile
          </Link>
          <Link className="navBarLink" to="/NewPost">
            Sell a Thing
          </Link>
          <button className="navBarLink" onClick={clearCurrentUser}>
            Logout
          </button>
        </nav>
      )}

      <Switch>
        <Route path="/posts/:postId">
          <SinglePostPage
            allPosts={allPosts}
            setIsLoading={setIsLoading}
            setAllPosts={setAllPosts}
            willDeliver={willDeliver}
            setDeliver={setDeliver}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            location={location}
            setLocation={setLocation}
          />
        </Route>

        <Route path="/posts">
          <Home allPosts={allPosts} />
        </Route>
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
          <NewPost
            allPosts={allPosts}
            setAllPosts={setAllPosts}
            setIsLoading={setIsLoading}
            willDeliver={willDeliver}
            setDeliver={setDeliver}
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            price={price}
            setPrice={setPrice}
            location={location}
            setLocation={setLocation}
          />
        </Route>
        <Route path="/Profile">
          {" "}
          <Profile />
        </Route>

        <Route path="/">
          {" "}
          <Search allPosts={allPosts} setAllPosts={setAllPosts} />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
