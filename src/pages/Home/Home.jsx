import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Row, Col, Container, Image } from "react-bootstrap";
import img from "../../img/Profile.png";

const Home = () => {
  return (
    <div>
      <Header />
      {/* <Row> */}
      {/* <Col> */}
      <Container lg={8} className="bg-white">
        <Row>
          <Col>
            <h1>About Me</h1>
            <hr></hr>
            <Row>
              <Col>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <div>
                    {/* <img
                      src={img}
                      width={150}
                      alt="Bio Picture"
                      className="float-left"
                    /> */}
                    <Image
                      src={img}
                      width={150}
                      height={200}
                      alt="Bio Picture"
                      className="float-left"
                      roundedCircle
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        "margin-left": "5px",
                        "text-align": "justify",
                      }}
                    >
                      Caleb Glorvigen is currently enrolled at Web Programming
                      bootcamp through Georgia Tech until March. He has a
                      Bachelors in Computer Science and a minor in graphic
                      design. He is looking to start a career in Web Development
                      to gain valuable hands on experience and to further his
                      coding knowledge. When he is not spending his time on
                      coding, he is enjoying the gym, playing sports, and
                      running.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* </Col>
      </Row> */}
      <Footer />
    </div>
  );
};

export default Home;
