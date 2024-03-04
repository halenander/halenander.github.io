import { Container, Col, Row } from "react-bootstrap";
import logo from "../assets/img/half-body.PNG";
import navIcon1 from '../assets/img/nav-icon1.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="LinkedIn"><img src={navIcon1} /></a>
                    </div>
                    <p>Copyright 2024. All Rights Reserved to Haley Lenander.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}