import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import editor from "../../Assets/Projects/codeEditor.png";
import newthinking from "../../Assets/Projects/newthinking.png";
import mirarAi from "../../Assets/Projects/mirar.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newthinking}
              isBlog={false}
              title="NewThinking.AI"
              description="Developing products with modern JavaScript libraries and frameworks like React.js, and Next.js to create scalable solutions; elevating engagement with AI technologies such as generative chatbots, conversational AI, and phone assistants to streamline communication and integrate seamlessly; crafting immersive audio visualizers that enhance user experiences."
              ghLink="#"
              demoLink="https://newthinking.ai/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mirarAi}
              isBlog={false}
              title="Mirar AI"
              description="Mirar AI is an advanced conversational AI application tailored to significantly enhance user engagement and interaction for influencers and content creators. Leveraging cutting-edge AI technologies, Mirar AI provides personalized and dynamic conversational experiences, allowing influencers to connect with their audience in a more meaningful and interactive manner."
              ghLink="#"
              demoLink="https://www.mirar.ai/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}
    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
