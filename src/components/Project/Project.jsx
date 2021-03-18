import React from "react";
import { Card, Button, Tooltip } from "react-bootstrap";
// import Images from '../../img';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Project = (props) => {
  const renderTooltipGitHub = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to View the GitHub Repo
    </Tooltip>
  );

  const renderTooltipDeployed = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Click to View the Deployed Site
    </Tooltip>
  );

  return (
    <Card
      className="float-left"
      style={{ width: "18rem", height: "14 rem", marginRight: "5rem" }}
    >
      {/* <Card.Img variant="top" src="https://i.ytimg.com/vi/nsw0Px-Pho8/maxresdefault.jpg" /> */}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a className="align-bottom" href={props.gitHubRep}>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltipGitHub}
          >
            <Button
              style={{
                textAlign: "center",
                marginRight: "2.5rem",
              }}
              variant="primary"
            >
              GitHub
            </Button>
          </OverlayTrigger>
        </a>

        <a className="align-bottom" href={props.deployLink}>
          <OverlayTrigger
            placement="right"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltipDeployed}
          >
            <Button
              style={{
                textAlign: "center",
              }}
              variant="primary"
            >
              Deployed
            </Button>
          </OverlayTrigger>
        </a>
      </Card.Body>
    </Card>
  );
};

export default Project;
