import React from "react";
import { Button } from "react-bootstrap";
import "./header.css";
import Logo from "../../assets/img/nextsteplogo.jpeg";

const Header = () => {
  const signOut = () => {
    sessionStorage.removeItem("userInfo");
    window.location.reload();
  };
  return (
    <div className="header-container">
      <h1>NextStep <img src={Logo} alt="Nextstep" width={40} height={40} ></img></h1>
      <Button
        variant="info"
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Header;
