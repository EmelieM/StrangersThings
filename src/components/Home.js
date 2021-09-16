import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);

  async function fetchAllPosts() {
    try {
      const response = await axios.get(
        "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/posts",
        {
          headers: {
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQyYWFmM2NkNmYxMDAwMTcwMDIzYjMiLCJ1c2VybmFtZSI6Im15dXNlcm5hbWUiLCJpYXQiOjE2MzE3NTkxODR9.JB2RENTiLAKRTfXtq6N171vMQQHNEWGdNWAKDShyP74",
          },
        }
      );
      setAllPosts(response.data.data.posts);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllPosts();
  }, []);
console.log(allPosts)
  return (
    <div className="posts-main-countainer">
      <h1>Posts</h1>
      {allPosts.length
        ? allPosts.map((e) => {
            return (
              <div key={e._id}>
          
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
};

/*This will be the main page of where all the items for sale will be*/

export default Home;
