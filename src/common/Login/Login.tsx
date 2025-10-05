import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { users } from "../../config";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/img/nextsteplogo.jpeg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = () => {
    const userInformation: any = users.find(
      (item: any) => item.email === email
    );
    if (userInformation) {
      if (userInformation.password === password) {
        sessionStorage.setItem("userInfo", JSON.stringify(userInformation));
        navigate("/dashboards");
        window.location.reload();
      } else {
        alert("incorrect password");
      }
    } else {
      alert("no user found");
    }
  };

  return (
    <div className="login-container">
      <div className="heading">
        <h1>Welcome to NextStep <img src={Logo} alt="Nextstep" width={40} height={40}></img></h1>
        <h3>Your Carrier Growth Partner</h3>
      </div>
      <div className="login-section">
        <div className="login-content">
          <h3>Why choose Nextstep</h3>
          <ul>
            <li>Apply to Thoushand of jobs</li>
            <li>Get matxhed with top companies</li>
            <li>Track your Application easily</li>
            <li>Carrier Growth Resources</li>
            <li>Connect with top Companies</li>
          </ul>
        </div>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            signIn();
          }}
        >
          <h2>Login|Signin</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email"
              required
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <div className="login-btn">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <div className="about-container">
        <h2>About Us</h2>
        <h3> NextStep is a modern job portal</h3>
        <div className="about-section">
          <p>
             Empower candidates to discover <br></br>jobs that match their skills &
            passion.
          </p>
          <p>
             Provide employers with smart <br></br> tools to find the best talent
            quickly.
          </p>
          <p>
             Make the hiring journey smoother <br></br> through technology and
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
