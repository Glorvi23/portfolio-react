import React from "react";
import Project from "../../components/Project/Project";
import db from "./db.json";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Row, Col, Container, Navbar, Nav } from "react-bootstrap";

const Portfolio = () => {
  console.log(db);

  return (
    <>
      <Header>Yessir!!

      </Header>
      <Row>
        <Col>
          <Container lg={8} className="bg-white">
            <Row>
              <Col lg>
                Portfolio page
                <Row>
                  <Col>
                    {db.map((item) => {
                      return <Project key={item.id} {...item} />;
                    })}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Portfolio;
