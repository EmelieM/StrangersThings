import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { SinglePost } from "./";

const SinglePostPage = ({ allPosts, setIsLoading }) => {
  const { postId } = useParams();

  const myPost = allPosts.find((post) => {
    if (post._id === postId) {
      return true;
    } else {
      false;
    }
  });

  if (!myPost) {
    return (
      <div className="post-card">
        <h3> the post with id {postId} was not found</h3>
      </div>
    );
  }

  return <SinglePost post={myPost} setIsLoading={setIsLoading} />;
};

export default SinglePostPage;
