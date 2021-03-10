import React from "react";
import { Card, Button } from "react-bootstrap";
// import Images from '../../img';

const Project = (props) => {
  return (
    <Card className="float-left" style={{ width: "18rem", height: "14 rem"}}>
      {/* <Card.Img variant="top" src="https://i.ytimg.com/vi/nsw0Px-Pho8/maxresdefault.jpg" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a className="align-bottom" href={props.gitHubRep}>
          <Button variant="primary">GitHub</Button>
        </a>
        {/* <a href={props.gitHubRep}>
          <Button className="align-right" variant="primary">GitHub</Button>
        </a> */}
      </Card.Body>
    </Card>
    // {console.log("hello")}
  );
};

export default Project;
