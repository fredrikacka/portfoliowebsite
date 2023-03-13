import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="logofooter" size={12} sm={6}>
            <img src={logo} alt="" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/fredrikackander/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/fredrikacka/">
                <img src={navIcon2} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. Created by Fredrik Ackander</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
