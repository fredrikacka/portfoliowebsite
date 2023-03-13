import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img11.png";
import projImg2 from "../assets/img/project-img-22.jpeg";
import projImg3 from "../assets/img/project-image-2.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Weather Forecast",
      description: "View your favorite city's weather",
      imgUrl: projImg1,
      programmingLanguages: "Javascript, React.js and CSS",
      websiteUrl: "https://fredrikacka.github.io/weatherforecast/",
      githubUrl: "https://github.com/fredrikacka/weatherforecast",
    },
    {
      title: "Coming soon",
      description: "Fetch API for information about movies",
      imgUrl: projImg3,
      programmingLanguages: "Javascript, React.js and CSS",
      websiteUrl: "https://fredrikacka.github.io/movienation/",
      githubUrl: "https://github.com/fredrikacka/movienation",
    },
    {
      title: "Coming soon",
      description: " ",
      imgUrl: projImg2,
      programmingLanguages: "",
    },
    /*     {
      title: "Coming soon",
      description: " ",
      imgUrl: projImg2,
      programmingLanguages: "",
    },
    {
      title: "Coming soon",
      description: " ",
      imgUrl: projImg2,
      programmingLanguages: "",
    },
    {
      title: "Coming soon",
      description: " ",
      imgUrl: projImg2,
      programmingLanguages: "",
    }, */
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <h4>
                    As a developer, I have had the opportunity to work on
                    various projects that have helped me refine my skills in
                    programming and problem-solving. Throughout my career, I
                    have mainly used Java, SpringBoot, SQL, Javascript,
                    React.js, CSS, and HTML to build web applications.
                  </h4>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/*  <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      {/*       <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
