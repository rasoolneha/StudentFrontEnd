import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState();
    const loginObj = { email };
    const handleSubmit = () => {
        const url = "https://studentbackend-5o6t.onrender.com/students/login";
        const loginObj = {email};
        axios 
        .post(url, loginObj)
        .then((res) => {
            alert(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

  return (
<Layout>
    <h3>Login Page</h3>
    <form onSubmit={handleSubmit}>
        <label for="email">Email ID</label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
        {/* <label for="password">Password</label>
        <input type="contact" id="contact" onChange={(e) => setContact(e.target.value)} /> */}
        <input type="Submit" />
    </form>
</Layout>
  );
}

export default Login
