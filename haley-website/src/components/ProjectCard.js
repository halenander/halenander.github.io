import { Col } from "react-bootstrap";

export const ProjectCard = ({title, description, imgUrl, Url}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="project img"/>
                <div className="proj-txtx">
                    <a href={Url} target="_blank">
                    <h4 style={{color:"white"}}>{title}</h4>
                    <span>{description}</span>
                    </a>
                </div>
            </div>
        </Col>
    )
}