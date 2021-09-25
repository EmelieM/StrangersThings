import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeMessage } from "../api";

const SinglePost = (props) => {
  const {
    post,
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
  } = props;
  const POST_ID = post._id;

  const [content, setContent] = useState("");
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const isParams = useParams();
  const paramsArray = Object.keys(isParams);

  if (paramsArray.length && post.isAuthor === false) {
    return (
      <div>
        <div className="post-card">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>

        <div className="message-form">
          <form
            id="newMessage"
            onSubmit={async (event) => {
              event.preventDefault();
              setIsLoading(true);

              try {
                const results = await makeMessage(post._id, content);
                return results;
              } catch (error) {
                throw error;
              } finally {
                setIsLoading(false);
                setContent("");
              }
            }}
          >
            <fieldset>
              <label>Send a message to seller?</label>
              <input
                id={post._id}
                type="text"
                value={content}
                onChange={(event) => {
                  setContent(event.target.value);
                }}
              />
            </fieldset>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  } else if (paramsArray.length && post.isAuthor === true) {
    return (
      <div>
        <button onClick={handleToggle}>Edit?</button>
        <div className={isActive ? null : "hidden"}>
          <div className="post-card">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>

          <div>
            <form
              id="newPosting"
              onSubmit={async (event) => {
                event.preventDefault();
                setIsLoading(true);

                try {
                  const results = await editPost(
                    title,
                    description,
                    price,
                    location,
                    willDeliver,
                    POST_ID
                  );
                  console.log(results.data.post);
                  const newPosts = allPosts.slice();
                  setAllPosts([...newPosts, results.data.post]);
                } catch (err) {
                  console.error(err);
                } finally {
                  setIsLoading(false);
                }
              }}
            >
              <fieldset className="title">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="listing title"
                  value={title}
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                />
              </fieldset>

              <fieldset className="description">
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  type="text"
                  placeholder="listing description"
                  value={description}
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                />
              </fieldset>

              <fieldset className="price">
                <label htmlFor="price">Price $</label>
                <input
                  id="price"
                  type="text"
                  placeholder="price in USD"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
              </fieldset>

              <fieldset className="location">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  type="text"
                  placeholder="listing location"
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </fieldset>

              <fieldset className="willDeliver">
                <label htmlFor="willDeliver">Willing to deliver?</label>

                <input
                  id="willDeliver"
                  type="checkbox"
                  value={willDeliver}
                  onChange={() => {
                    setDeliver(!willDeliver);
                  }}
                />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="post-card">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    );
  }
};

export default SinglePost;
