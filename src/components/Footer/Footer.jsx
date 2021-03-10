import React from "react";
import {
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{"margin-top": "15px","background-color": "grey", "text-align": "center"}}>
      {/* <Navbar> */}
        <p style={{"text-align": "center"}}>&#169; 2021</p>
      {/* </Navbar> */}
    </div>
  );
};

export default Footer;
