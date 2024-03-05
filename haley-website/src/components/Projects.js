import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import admissions from "../assets/img/admissions_webhook.png";
import linux from "../assets/img/linux_shell.png";
import willy from "../assets/img/pet_willy.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const aca_projects = [
        {
            title: "Admissions Webhook",
            description: "Golang, Docker, Kubernetes, Redis",
            imgUrl: admissions,
            Url: "https://github.com/usfca-cs490-sp23/admissions-webhook",
        },
        {
            title: "Search Engine",
            description: "Java, HTML, Log4j, Bulma",
            imgUrl: admissions,
        },
        {
            title: "Custom Linux Shell",
            description: "C, Linux, Makefile",
            imgUrl: linux,
        },
    ]

    const post_projects = [
        {
            title: "Portfolio Website",
            description: "React, Javascript, CSS, HTML",
            imgUrl: admissions,
            Url: "https://github.com/halenander/personal-website",
        },
        {
            title: "Escape the Pets",
            description: "C#, Unity",
            imgUrl: willy,
            Url: "https://github.com/halenander/escape_the_pets",
        },
    ]

    const hack_projects = [
        {
            title: "ByteLingo",
            description: "JavaScript, TypeScript, CSS, HTML",
            imgUrl: willy,
            Url: "https://github.com/hack-thvm/ByteLingo",
        },
        {
            title: "Climate Change Casa",
            description: "Python (Pygame)",
            imgUrl: willy,
            Url: "https://github.com/halenander/ClimateChangeCasa",
        },
    ]

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                            <h1>Projects</h1>
                            <p>Sample text for projects.</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Academic Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Post-Grad Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Hack-a-thon Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        aca_projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key = {index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        post_projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key = {index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                    {
                                        hack_projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key = {index}
                                                {...project}
                                                />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bkg img"></img>
        </section>
    )

}