import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Movieee from "../../Assets/Projects/Movizzzz.png";
import Supermarket from "../../Assets/Projects/Supermart.png";
import Brewery from "../../Assets/Projects/Brewery.png";
import VirtuCart from "../../Assets/Projects/VirtuCart.png";
import Detector from "../../Assets/Projects/Recipe.png";
import AirReserve from "../../Assets/Projects/AirReserve.png";
import Snapgram from "../../Assets/Projects/Snapgram.png";
import TravelSwift from "../../Assets/Projects/TravelSwift.png";
import GoCommerce from "../../Assets/Projects/GoCommerce.jpg";
import GoPay from "../../Assets/Projects/GoPay.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "09px" }}>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoCommerce}
              isBlog={false}
              title="E-Commerce(GoCommerce)"
              description="Crafted an E-commerce goods management system using HTML, CSS, JavaScript and Go, incorporated features for manage product and order, mManage clients and manage vendors, achieving a 96% accuracy rate on order processing."
              ghLink="https://github.com/SanketGhorpade1999/E-Commerce.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GoPay}
              isBlog={false}
              title="E-Wallet(GoPay)"
              description="Developed an E-wallet Crud Application using Golang, IntelliJ-idea and OO Patterns, Added features such as transactions between merchants and customer, achieving a 92% boosting accuracy."
              ghLink="https://github.com/SanketGhorpade1999/E-Wallet.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
                
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VirtuCart}
              isBlog={false}
              title="VirtuCart"
              description="Developed an E-Commerce platform using Spring Boot and React, integrating MongoDB for data storage and implementing Stripe Payment for checkout functionality.."
              ghLink="https://github.com/SanketGhorpade1999/VirtuCart.git"
             // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AirReserve}
              isBlog={false}
              title="AirReserve"
              description="Built an Airline Management System in Java Swings facilitating flights ticket booking, transactions, and online operations, incorporating MySQL for data storage."
              ghLink="https://github.com/SanketGhorpade1999/AirReserve.git"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Brewery}
              isBlog={false}
              title="Brewery-Reviwer"
              description="An E-Commerce MERN stack Application allows user to review breweries as per rating 1 to 5. Application build using HTML, CSS and JavaScript and MongoDB for Database allows user to review the brewery shops as per brewery type, shop details, state etc."
              ghLink="https://github.com/SanketGhorpade1999/Brewery-App.git"
             // demoLink="brewery-app-g1kv.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movieee}
              isBlog={false}
              title="Movie App"
              description="An Front-end movie watching system using HTML, CSS, JavaScript and for Movies used TMdb Datasates and MongoDb. Allows user to watch latest movies trailers and behind scenes any time any where"
              ghLink="https://github.com/SanketGhorpade1999/Movie-App.git"
              demoLink="https://movie-app-iota-hazel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Detector}
              isBlog={false}
              title="FlavorFusion"
              description=": Engineered a Deep Learning-based food image recognition system using CNN and NLP for recipe retrieval, documented and published research papers on IRJIET, ICRTET, and Academia.edu."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.academia.edu/104390149/Recipe_Detection_of_Image_Using_Deep_Learning?source=swp_share"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Supermarket}
              isBlog={false}
              title="Supermarket Management"
              description="Developed Java E-Commerce Software, providing separate admin and client functionalities 92% simply. Admins can manage products, and clients make purchases and generate bills with 96% functionality. Added a Splash Screen for the UI interface, and utilized AWT API to create complex functionality for both parties, with employing MySQL Database to store the clients data with 92% ease."
              ghLink="https://github.com/SanketGhorpade1999/Supermarket-Management.git"
              demoLink="https://www.youtube.com/watch?v=RaKoZt-Pjvs&feature=youtu.be"      
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snapgram}
              isBlog={false}
              title="Social-Media App"
              description="An Front-end Social Media application using ReactJS, Tailwind CSS, React Query and Appwrite. Allows user to post images and save memories at any time any where"
              ghLink="https://github.com/SanketGhorpade1999/Snapgram.git"
              demoLink="https://snapgram-ten-taupe.vercel.app/sign-in"
            />
          </Col>

         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TravelSwift}
              isBlog={false}
              title="Travel Booking App"
              description="An Front-end Travel booking application using ReactJS, Tailwind CSS, Netlify and JavaScript. Allows user to book destinations places in cheap cost at any time any where"
              ghLink="https://github.com/SanketGhorpade1999/TravelSwift.git"
              demoLink="https://travel-tcj.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
