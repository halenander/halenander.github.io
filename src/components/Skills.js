import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import java from "../assets/img/java.PNG";
import c from "../assets/img/c.PNG";
import python from "../assets/img/python.PNG";
import golang from "../assets/img/golang.PNG";
import k8 from "../assets/img/k8.PNG";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Primary programming skills, including familiarity with languages and libraries.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={java} alt="image"/>
                                    <h5>Java Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="image"/>
                                    <h5>Python Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={c} alt="image"/>
                                    <h5>C Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={golang} alt="image"/>
                                    <h5>Golang Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={k8} alt="image"/>
                                    <h5>Kubernetes</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}