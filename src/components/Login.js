import React, { useState } from "react";
import { loginUser } from "../api";
import { storeUser } from "../auth";
import { Link } from "react-router-dom";

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const setIsLoading = props.setIsLoading;

  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");

  return (
    <div>
      <header>
        <h1>Welcome to Strangers' Things!</h1>
      </header>

      <div className="login-main">
        <form
          id="login"
          onSubmit={async (event) => {
            event.preventDefault();
            setIsLoading(true);

            try {
              const results = await loginUser(userName, passWord);
              storeUser(results.data.token);
              setIsLoggedIn(true);
            } catch (err) {
              console.error(error);
            } finally {
              setIsLoading(false);
            }
          }}
        >
          <fieldset className="login-input">
            <label htmlFor="userName">User Name</label>
            <input
              id="userName"
              type="text"
              placeholder="enter username"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              required
            />
          </fieldset>

          <fieldset className="login-input">
            <label htmlFor="passWord">Password</label>
            <input
              id="passWord"
              type="text"
              placeholder="enter password"
              value={passWord}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </fieldset>

          <button type="submit">Submit</button>

          <Link className="navBarLink" to="/register">
            Register new user
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
