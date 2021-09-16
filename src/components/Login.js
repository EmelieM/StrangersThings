import React, { useState } from 'react';
import { loginUser } from '../api';
import { storeUser } from '../auth';

const Login = (props) => {

    const setIsLoggedIn = props.setIsLoggedIn;
    const setIsLoading = props.setIsLoading;

    const [userName, setUserName] = useState("")
    const [passWord, setPassword] = useState("")


    return <div><header>
        <h1>Welcome to Strangers' Things!</h1></header>



        <div className="login-main">
            <form
            id="login"
            onSubmit={async (event)=>{
              event.preventDefault();
              setIsLoading(true);

              try{
                const results = await loginUser(userName, passWord)
                console.log(results.data.token)
                storeUser(results.data.token)
                setIsLoggedIn(true)
              }
              catch(err){
                console.error(error)
              }
              finally{
                setIsLoading(false)
              }
            }}
            >

            <fieldset className="username-input">
            <label htmlFor="userName">User Name</label>
            <input 
              id="userName"
              type="text"
              placeholder="enter username"
              value={userName}
              onChange={(event)=>{
                setUserName(event.target.value)
              }}
              required
            />
            </fieldset>

            <fieldset className="pass-input">
            <label htmlFor="passWord">Password</label>
            <input 
              id="passWord"
              type="text"
              placeholder="enter password"
              value={passWord}
              onChange={(event)=>{
                setPassword(event.target.value)
              }}
              required
            />
            </fieldset>

            <button type="submit">Submit</button>
            </form>
        </div>

    </div>

}

/*This will have the login options. 
If they do not have a login that matches the registered logins an error will pop up
and they'll be directed to register a new user
there will be a link on the bottom to register as a new user which will redirect to the register tab*/

export default Login;