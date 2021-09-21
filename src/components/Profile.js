import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../api';

const Profile = () => {
    const [user, setUser] = useState({})

    useEffect(async ()=>{
      const userInfo = await getUserInfo()
      setUser(userInfo.data)
    }, [])

    const userPosts = user.posts;
    const userMessages = user.messages;
    const userName = user.username;
    console.log(user)

    return <div><header className="profile-username">
        <h2>Welcome {userName}!</h2>
    </header>

    <div className='profile-posts'>
    <h2>Your Posts:</h2>
    {userPosts.map((post)=>{
        console.log(post)
        return <div className="post-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
    })}

    </div>

    <div className="profile-messages">
    <h2>Your Messages:</h2>
    {userMessages.map((message)=>{
      console.log(message)
      return <div>
        <h2>From User: {message.fromUser.username}</h2>
        <h3>{message.post.title}</h3>
        <p>{message.content}</p>
      </div>
    })}

    </div>


    </div>

}

/* this will have the users profile
showing what they're selling and messages if they have messages */

export default Profile;