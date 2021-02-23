import React from "react";
import { Card, Button } from "react-bootstrap";
// import Images from '../../img';

const Project = (props) => {
  return (
    <Card className="float-left" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img.default} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a href={props.gitHubRep}>
          <Button variant="primary">GitHub</Button>
        </a>
      </Card.Body>
    </Card>
    // {console.log("hello")}
  );
};

export default Project;
