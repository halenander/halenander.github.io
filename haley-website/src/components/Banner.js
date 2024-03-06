import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/full-body.PNG";
import resumePDF from '../assets/pdf/resume.pdf';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Haley Lenander","a Software Engineer", "a Backend Developer", "a Multi-Language Programmer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
            <Row className = "align-items-center">
                <Col xs = {12} md = {6} xl = {7}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h1>{`Hi I'm `}<span className="wrap">{text}</span></h1>
                    <p>New Graduate Software Engineer with a passion for cybersecurity, game development, and AI.</p>
                    <button><span><a href={resumePDF} target="_blank"><text style={{color:"white"}}>View My Resume</text></a></span><ArrowRightCircle size={25} /></button>
                </div>}
                </TrackVisibility>
                </Col>
                <Col xs = {12} md = {6} xl = {5}>
                    <img src={headerImg} alt="Header"/>
                </Col>
             </Row>
            </Container>
        </section>
    )
}