import React, { useState } from "react";
import axios from 'axios';

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
      })
      .catch(err => {
        console.error(err);
      })
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Login to the Bubble App</h1>
      <form onSubmit={handleSubmit} >
        <label htmlFor='username'>
          Username:
          <input type='text' name='username' id='username' value={credentials.username} onChange={handleChange}/>
        </label>
        <label htmlFor='password'>
          Password:
          <input type='text' name='password' id='password' value={credentials.password} onChange={handleChange} />
        </label>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
