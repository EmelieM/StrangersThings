import React, { useState, useEffect } from "react";
import { getUserInfo } from "../api";
import { Link } from "react-router-dom";
import SinglePost from "./SinglePost";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(async () => {
    const userInfo = await getUserInfo();
    setUser(userInfo.data);
  }, []);

  const userPosts = user.posts;
  const userMessages = user.messages;
  const userName = user.username;

  return (
    <div className="profile-container">
      <header className="profile-username">
        <h2>Welcome {userName}!</h2>
      </header>

      <div className="profile-posts">
        <h3>Your Posts:</h3>
        {userPosts && userPosts.length
          ? userPosts.map((post) => {

              return post.active ? (
                <Link to={`/posts/${post._id}`} key={post._id}>
                  <SinglePost post={post} />;
                </Link>
              ) : null;

            })
          : null}
      </div>

      <div className="profile-messages">
        <h3>Your Messages:</h3>
        {userMessages && userMessages.length
          ? userMessages.map((message) => {
              return (
                <div key={message._id}>
                  <h2>From User: {message.fromUser.username}</h2>
                  <h3>{message.post.title}</h3>
                  <p>{message.content}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

/* this will have the users profile
showing what they're selling and messages if they have messages */

export default Profile;
