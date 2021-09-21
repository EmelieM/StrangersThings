import React, { useState, useEffect } from 'react';
import { getUserInfo } from '../api';

const Profile = () => {
    const [user, setUser] = useState({})

    useEffect(async ()=>{
      const userInfo = await getUserInfo();
      setUser(userInfo.data)
    }, [])

    console.log(user)
    const userPosts = user.posts;
    console.log(userPosts)
    const userMessages = user.messages;
    const userName = user.username;

    return <div className="profile-container">
    <header className="profile-username">
        <h2>Welcome {userName}!</h2>
    </header>

    <div className='profile-posts'>
    <h2>Your Posts:</h2>
    {userPosts && userPosts.length ? userPosts.map((post)=>{
        return <div key={post._id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
    }) : null}
    </div>

    <div className="profile-messages">
    <h2>Your Messages:</h2>
    {userMessages && userMessages.length ? userMessages.map((message)=>{
      return <div key={message._id}>
        <h2>From User: {message.fromUser.username}</h2>
        <h3>{message.post.title}</h3>
        <p>{message.content}</p>
      </div>
    }) : null}
    </div>


    </div>

}

/* this will have the users profile
showing what they're selling and messages if they have messages */

export default Profile;