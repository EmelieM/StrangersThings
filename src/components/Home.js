import React from "react";
import { Link } from "react-router-dom";

import SinglePost from "./SinglePost";

const Home = ({ allPosts }) => {
  return (
    <div className="posts-main-countainer">
      <h1>Posts</h1>
      {allPosts.length
        ? allPosts.map((post) => {
            return post.active ? (
              <Link to={`/posts/${post._id}`} key={post._id}>
                <SinglePost post={post} />
              </Link>
            ) : null;
          })
        : null}
    </div>
  );
};

export default Home;
