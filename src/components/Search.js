import React, { useState, useEffect } from "react";
import { Home } from ".";

const Search = (props) => {
  const [postTitle, setPostTitle] = useState("");
  const [postPrice, setPostPrice] = useState("");
  const [postLocation, setPostLocal] = useState("");
  const [postsToDisplay, setPostsToDisplay] = useState([]);
  const allPosts = props.allPosts;
  const setAllPosts = props.setAllPosts;

  useEffect(() => {
    setPostsToDisplay(allPosts);
  }, [allPosts]);

  const postMatches = (post, title, price, location) => {
    if (title.length && post.title.includes(title)) {
      return true;
    } else if (price.length && post.price.includes(price)) {
      return true;
    } else if (location.length && post.location.includes(location)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div className="searchbar-container">
        <header className="searchbar-header">Search</header>

        <form
          id="searchbar"
          onSubmit={(event) => {
            event.preventDefault();

            let filteredPosts = allPosts.filter((post) => {
              let result = postMatches(
                post,
                postTitle,
                postPrice,
                postLocation
              );

              return result;
            });

            if (postTitle.length || postPrice.length || postLocation.length) {
              setPostsToDisplay(filteredPosts);
            } else {
              setPostsToDisplay(allPosts);
            }
          }}
        >
          <fieldset className="searchBar-input">
            <label htmlFor="postTitle">Title</label>
            <input
              id="postTitle"
              type="text"
              placeholder="Post Title"
              value={postTitle}
              onChange={(event) => {
                setPostTitle(event.target.value);
              }}
            ></input>
          </fieldset>

          <fieldset className="searchBar-input">
            <label htmlFor="postPrice">Price</label>
            <input
              id="postPrice"
              type="text"
              placeholder="Post Price"
              value={postPrice}
              onChange={(event) => {
                setPostPrice(event.target.value);
              }}
            ></input>
          </fieldset>

          <fieldset className="searchBar-input">
            <label htmlFor="postLocation">Location</label>
            <input
              id="postLocation"
              type="text"
              placeholder="Location"
              value={postLocation}
              onChange={(event) => {
                setPostLocal(event.target.value);
              }}
            ></input>

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>

      <Home allPosts={postsToDisplay} setAllPosts={setAllPosts} />
    </div>
  );
};

/*A search bar where they can search for a post with a specific keyword in the title of the post*/

export default Search;
