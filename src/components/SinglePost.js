import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeMessage } from "../api";

const SinglePost = (props) => {
  const { post, setIsLoading } = props;
  console.log(post);

  const [content, setContent] = useState("");

  const isParams = useParams();
  const paramsArray = Object.keys(isParams);
  return (
    <div>
      <div className="post-card">
        <h3>{post.title}</h3>
        <p>{post.description}</p>
      </div>

      {paramsArray.length && post.isAuthor === false ? (
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
      ) : null}
    </div>
  );
};

export default SinglePost;
