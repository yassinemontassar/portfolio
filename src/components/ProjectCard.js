import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, lien }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" height='1200px' width='1200px' />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <Button variant="success">
            <a href={lien} target="_blank" rel="noreferrer" className="h6">
              View Project
            </a>
          </Button>
        </div>
      </div>
    </Col>
  )
}