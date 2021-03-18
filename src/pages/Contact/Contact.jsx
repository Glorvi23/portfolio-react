import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Row, Col, Container, Form } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Header />
      <Container lg={8} className="bg-white">
        <Row>
          <Col>
            <h1>Contact</h1>
            <hr></hr>
            {/* <Row>
                    <Col>
                      <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Name</Form.Label>
                          <Form.Control type="name" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="name@example.com"
                          />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                          <Form.Label>Message</Form.Label>
                          <Form.Control placeholder="Message" as="textarea" rows={3} />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row> */}
            <Row>
              <Col
                style={{
                  textAlign: "center",
                  marginTop: "3rem",
                  marginBottom: "3rem",
                }}
              >
                <a
                  style={{
                    marginRight: "5rem",
                  }}
                  href="https://github.com/Glorvi23"
                >
                  {/* <FaGithub /> */}
                  <i class="fab fa-github fa-5x"></i>
                </a>
                {/* </Col>
              <Col> */}
                <a href="https://www.linkedin.com/in/caleb-glorvigen/">
                  {/* <FaLinkedin /> */}
                  <i class="fab fa-linkedin fa-5x"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
