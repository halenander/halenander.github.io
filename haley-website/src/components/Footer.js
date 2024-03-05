import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/half-body.PNG";
import navIcon1 from '../assets/img/nav-icon1.svg';
import resumePDF from '../assets/pdf/resume.pdf';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={4}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={8} className="text-center text-sm-end">
                    <br/>
                    <button className="vvd"><span><a href={resumePDF} target="_blank"><text style={{color:"white"}}>Open Resume</text></a></span></button>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/haley-lenander/" target="_blank"><img src={navIcon1} /></a>
                    </div>
                    <br/>
                    <p>Copyright 2024. All Rights Reserved to Haley Lenander.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}