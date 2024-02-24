import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

    const projects = [
        {
            title: "Admissions Webhook",
            description: "Golang, Docker, Kubernetes, Redis",
            imgUrl: projImg1,
        },
        {
            title: "Search Engine",
            description: "Java, HTML, Log4j, Bulma",
            imgUrl: projImg2,
        },
        {
            title: "Climate Change Casa",
            description: "Python (Pygame)",
            imgUrl: projImg3,
        },
        {
            title: "Custom Linux Shell",
            description: "C, Linux, Makefile",
            imgUrl: projImg1,
        },
        {
            title: "ByteLingo",
            description: "JavaScript, TypeScript, CSS, HTML",
            imgUrl: projImg2,
        },
        {
            title: "Escape the Pets",
            description: "C#, Unity",
            imgUrl: projImg3,
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Sample text for projects.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
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
                            <Tab.Pane eventKey="second">Empty Text #2</Tab.Pane>
                            <Tab.Pane eventKey="third">Empty Text #3</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="bkg img"></img>
        </section>
    )

}