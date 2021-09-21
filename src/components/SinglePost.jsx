import React, { useState, useEffect } from "react";

const SinglePost = (props) => {
  const { post } = props;
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </div>
  );
};

export default SinglePost;
