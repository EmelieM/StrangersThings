import React, { useState } from 'react';
import { registerUser } from '../api';
import { storeUser } from '../auth';

const Register = (props) => {

    const setIsLoggedIn = props.setIsLoggedIn;
    const setIsLoading = props.setIsLoading;

    const [userName, setUserName] = useState("")
    const [passWord, setPassword] = useState("")
    const [confirmPass, setConfirm] = useState("")


    return <div><header>
        <h1>Welcome to Strangers' Things!</h1></header>


        <div className="register-main">
            <form
            id="register"
            onSubmit={async (event)=>{
              event.preventDefault();
              setIsLoading(true);

              try{
                if (passWord === confirmPass){
                const results = await registerUser(userName, passWord)
                console.log(results.data.token)
                storeUser(results.data.token)
                setIsLoggedIn(true)} else {
                    console.log("Passwords do not match")
                    alert("Passwords do not match")
                }
              }
              catch(err){
                console.error(err)
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

            <fieldset className="pass-input">
            <label htmlFor="passWord">Password</label>
            <input 
              id="passWord"
              type="text"
              placeholder="confirm password"
              value={confirmPass}
              onChange={(event)=>{
                  setConfirm(event.target.value)
              }}
              required
            />
            </fieldset>

            <button type="submit">Submit</button>
            </form>
        </div>

    </div>

}


export default Register;