import React, { useState, useEffect } from "react";
import { SinglePost } from "./";
import axios from "axios";

const deletePost = async () => {
  const { id } = useParam();

  const deleteMyPost= async ()=>{
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.token,
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      alert("Post Has Been Deleted");
      renderPosts(postArr);
    })
    .catch(console.error);
};
    return (
        <div>
            < SinglePost post={myPost} setIsLoading={setIsLoading} />
            <button onClick={deleteMyPost}> DELETE</button>
        </div>
      );
};


export default deletePost;
