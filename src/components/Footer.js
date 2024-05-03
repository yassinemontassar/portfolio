import { Col, Container, Row } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={3}>
            {/* <img src={logo} alt="Logo" className="photo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yassine-montassar-7aa3ab283/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/yassine.baws/" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="https://github.com/yassinemontassar" target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}