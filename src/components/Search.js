import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [postLocation, setPostLocal] = useState("");

  const postMatches = (post, title, price, location) => {};

  const filteredPosts = posts.filter((post) =>
    postMatches(post, postTitle, postPrice, postLocation)
  );
  const postsToDisplay =
    postTitle.length || postPrice.length || postLocation.length
      ? filteredPosts
      : posts;
};

/*A search bar where they can search for a post with a specific keyword in the title of the post*/

export default Search;
