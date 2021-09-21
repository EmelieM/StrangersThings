import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";

const Home = (props) => {
  const allPosts = props.allPosts;
  const setAllPosts = props.setAllPosts;

  useEffect(() => {
    fetchAllPosts();
  }, []);
  return (
    <div className="posts-main-countainer">
      <h1>Posts</h1>
      {allPosts.length
        ? allPosts.map((e) => {
            return (
              <div key={e._id} className="post-card">
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

/*This will be the main page of where all the items for sale will be*/

export default Home;
