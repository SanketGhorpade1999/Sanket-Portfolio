import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiPycharm,
  SiVercel,
  SiHeroku,
  SiAnaconda,
  SiTensorflow,
  SiKeras,
  SiAcademia,
  SiApachenetbeanside,
  SiJupyter,
  SiIntellijidea,
  SiNetlify,
  SiLinux,
  SiShell,
  SiEclipseide,
  SiApachemaven,
  SiOpencv
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAcademia />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachenetbeanside />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
        </Col>
         <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiShell />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiApachemaven />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        </Col>
    </Row>
  );
}

export default Toolstack;
