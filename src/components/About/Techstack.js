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
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
 
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiPython className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out" />
      </Col>
    </Row>
  );
}

export default Techstack;
