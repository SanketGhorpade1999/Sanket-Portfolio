import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiBootstrap
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiSpring,
  SiSpringboot,
  SiMicrosoftazure,
  SiGooglecloud,
  SiStripe,
  SiGo
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiStripe />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiGo />
        </Col>
    </Row>
  );
}

export default Techstack;
