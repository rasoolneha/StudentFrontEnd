import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../components/styles.css";

function Footer() {
  return (
   <Container className="footer-container">
    <Row>
      <Col>
      <table>
        <tr>
        <th>Courses</th>
        <th>More from us</th>
        <th>Contact us</th>
        </tr>
        <tr>
        <td>
          <ul>
          <li>Science</li>
          <li>Robotics</li>
          <li>Mathematics</li>
          </ul>
        </td>
          <td>
            <ul>
              <li>Presentations</li>
              <li>Debates</li>
              <li>Graphics</li>
            </ul>
          </td>
            <td>
              <ul>
                <li>Location: Bangalore</li>
                <li>Email: info@school.com</li>
                <li>Phone: 0418-20045</li>
              </ul>         
            </td>
          </tr>
      </table>
      <div></div>
      </Col>
      <Col>
      <form>
        <label for="email">Email</label>
        <input type="email" id="email" />
        <label for="description">Description</label>
        <textarea id="description">Enter your queries</textarea>
      </form>
      </Col>
    </Row>
   </Container>
  );
}

export default Footer;
