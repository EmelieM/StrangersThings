import axios from 'axios';

const BASE = 'https://strangers-things.herokuapp.com/api/2106-CPU-RM-WEB-PT'

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${ BASE }/users/login`,
    {user:{
      username,
      password
    }}
    );
    return data;
  } catch (error) {
    throw error;
  }
}


export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${ BASE }/users/register`,
    {user:{
      username,
      password
    }}
    );
    return data;
  } catch (error) {
    throw error;
  }
}