import axios from "axios";
import { getToken } from "../auth";

const BASE = "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT";

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: {
        username,
        password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchAllPosts(setAllPosts) {
  try {
    const myToken= getToken()
    const response = await axios.get(
      "https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT/posts",
      {
        headers: {
          "auth-token": myToken,
        },
      }
    );
    setAllPosts(response.data.data.posts);
  } catch (err) {
    console.log(err);
  }
}

//

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      user: {
        username,
        password,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}

//

export async function makePosting(
  title,
  description,
  price,
  location,
  willDeliver
) {
  const token = getToken();

  try {
    const { data } = await axios.post(
      `${BASE}/posts`,
      {
        post: {
          title,
          description,
          price,
          location,
          willDeliver,
        },
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
}

//

export async function fetchAllPosts(setAllPosts) {
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
  } catch (err) {
    console.log(err);
  }
}

//

export async function getUserInfo() {
  const token = getToken();

  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
}
