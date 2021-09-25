import React from "react";
import { useParams } from "react-router-dom";
import { SinglePost } from "./";

const SinglePostPage = ({
  allPosts,
  setAllPosts,
  setIsLoading,
  willDeliver,
  setDeliver,
  title,
  setTitle,
  description,
  setDescription,
  price,
  setPrice,
  location,
  setLocation,
}) => {
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

  return (
    <SinglePost
      post={myPost}
      setIsLoading={setIsLoading}
      allPosts={allPosts}
      setAllPosts={setAllPosts}
      setIsLoading={setIsLoading}
      willDeliver={willDeliver}
      setDeliver={setDeliver}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      price={price}
      setPrice={setPrice}
      location={location}
      setLocation={setLocation}
    />
  );
};

export default SinglePostPage;
