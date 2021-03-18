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
    <footer style={{"margin-top": "15px","background-color": "black", "text-align": "center"}}>
      {/* <Navbar> */}
        <p style={{ color: "white","text-align": "center"}}>&#169; 2021 Caleb Glorvigen</p>
      {/* </Navbar> */}
    </footer>
  );
};

export default Footer;
