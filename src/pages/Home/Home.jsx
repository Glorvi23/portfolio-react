import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Row, Col, Container } from "react-bootstrap";
import img from "../../img/Profile.png";

const Home = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col>
          <Container lg={8} className="bg-white">
            <Row>
              <Col>
                About Me
                <hr></hr>
                <Row>
                  <Col>
                    <img src={img} alt="Bio Picture" className="float-left" />
                    <p>
                      Caleb Glorvigen is currently enrolled at Web Programming
                      bootcamp through Georgia Tech until March. He has a
                      Bachelors in Computer Science and a minor in graphic
                      design. He is looking to start a career in Web Development
                      to gain valuable hands on experience and to further his
                      coding knowledge. When he is not spending his time on
                      coding, he is enjoying the gym, playing sports, and
                      running.
                    </p>
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

export default Home;
