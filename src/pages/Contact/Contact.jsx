import React from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Row, Col, Container, Form } from "react-bootstrap";


const Contact = () => {
    return (
      <div>
        <Header />
        <Row>
          <Col>
            <Container lg={8} className="bg-white">
              <Row>
                <Col>
                  Contact
                  <hr></hr>
                  <Row>
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
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Footer />
      </div>
    );
};

export default Contact;