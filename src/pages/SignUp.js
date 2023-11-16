import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function SignUp() {
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();
  const [email, setEmail] = useState();
  const [contact, setContact] = useState();
  const [parentName, setParentName] = useState();
  const [parentContact, setParentContact] = useState();

  let handleSubmit = (event) => {
    const studentObj = {
      firstName,
      lastName,
      email,
      contact,
      parentName,
      parentContact,
    };
    const url = "https://studentbackend-5o6t.onrender.com/students/create-student";
    axios
    .post(url, studentObj)
    .then((res) => {
       if (res.status === 200) {
        alert("student data added successfuly");
       } else {
        Promise.reject();
       }
    })
    .catch((err) => {
      console.log(err);
    });
    event.preventDefault();
  };

  return (
    <Layout>
      <h2 id='heading'>Student Registration Form</h2>
    <Container>
      <Row>
        <Col>
        <img src='student.png' />
        </Col>
        <Col>
        <form onSubmit={handleSubmit}>
          <label for="firstname">First Name</label>
          <input type="text" id="firstname" onChange={(e) => {
            setfirstName(e.target.value);
          }} />
          <label for="lastname">Last Name</label>
          <input type="text" id="lastname" onChange={(e) => {
            setlastName(e.target.value);
          }}/>
          <label for="email">Email</label>
          <input type="text" id="email" onChange={(e) => {
            setEmail(e.target.value);
          }} />
          <label for="contact">Contact</label>
          <input type="tel" id="contact" onChange={(e) => {
            setContact(e.target.value);
          }} />
          <label for="parentName">Parent Name</label>
          <input type="text" id="parentName" onChange={(e) => {
            setParentName(e.target.value);
          }}/>
          <label for="parentContact">Parent Contact</label>
          <input type="tel" id="parentContact" onChange={(e) => {
            setParentContact(e.target.value);
          }} />
          <input type='Submit' id='submit' />
        </form>
        </Col>
      </Row>
    </Container>
      </Layout>
  );
}

export default SignUp;
