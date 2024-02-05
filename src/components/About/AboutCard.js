import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Guy's, I am <span className="purple">Sanket Ghorpade </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am backend developer and primarily work in Java, C++, Python and ReactJS.
            <br />
            I have completed Bachelor's of Engineering (B.E.) in Information Technology at University of
            Pune.
            <br />
              About my internship I have completed Golang Developer Intern in Suven Consultants & Technologies Pvt. Ltd.
              where my task was to devloped and modify and Resolved 250+ bugs, improved code efficiency by 95%, and enhanced code quality by incorporating Object-Oriented Patterns, 
              resulting in a 92% increase in overall code quality. During the internship, delved deep into the Go language, exploring OOP Concepts, Functions and Methods, 
              understanding of Gin Framework, File System in Golang, Dynamic Reflection in Go, etc.
            <br />
                <br/>
                <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Singing Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Binging on Netflix
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create with purpose, innovate with passion, and inspire with impact!"{" "}
          </p>
          <footer className="blockquote-footer">Sanket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
