import React from "react";
import Project from "../../components/Project/Project";
import db from "./db.json";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Row, Col, Container } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import laugh from "./img/about.png"


const Portfolio = () => {
  console.log(db);

  return (
    <>
      <Header />
      {/* <Row> */}
      {/* <Col> */}
      <Container lg={8} className="bg-white">
        <Row>
          <Col lg>
            <h1>Portfolio</h1>
            <p>
              Please click on the project buttons to be brought to their
              repositories.
            </p>
            <hr></hr>
            <Row>
              <Col xs={12} style={{ textAlign: "center" }}>
                {db.map((item) => {
                  return <Project key={item.id} {...item} />;
                })}
                {/* <Card className="float-left" style={{ width: "18rem" }}>
                      <Card.Img
                        variant="top"
                        src={db[0].laugh}
                      />
                      <img src="./img/screenshot"/>
                      <Card.Body>
                        <Card.Title>{db[0].title}</Card.Title>
                        <Card.Text>{db[0].description}</Card.Text>
                        <a href={db[0].gitHubRep}>
                          <Button variant="primary">GitHub</Button>
                        </a>
                        <a href={db[0].gitHubRep}>
                          <Button className="align-right" variant="primary">
                            GitHub
                          </Button>
                        </a>
                      </Card.Body>
                    </Card> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* </Col>
      </Row> */}
      <Footer />
    </>
  );
};

export default Portfolio;
