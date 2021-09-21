import React, { useState, useEffect } from "react";
import { fetchAllPosts } from "../api";
import { Link } from "react-router-dom";

import SinglePost from "./SinglePost";

const Home = ({ allPosts }) => {
  return (
    <div className="posts-main-countainer">
      <h1>Posts</h1>
      {allPosts.length
        ? allPosts.map((post) => {
            return (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <SinglePost post={post} />;
              </Link>
            );
          })
        : null}
    </div>
  );
};

/*This will be the main page of where all the items for sale will be*/

export default Home;
