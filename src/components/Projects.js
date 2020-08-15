import React from "react"
import Img from "gatsby-image"
import { Container, Row, Col, Badge } from "react-bootstrap"
import GitHubIcon from '@material-ui/icons/GitHub';

const ProjectCard = ({ frontmatter, image }) => {
  const { project, startDate, endDate, link } = frontmatter
  return (
    <Container fluid className="m-auto work-history">
      <Img
        fluid={image}
        style={{
          maxHeight: "15vmax",
          maxWidth: "15vmax",
        }}
        className="m-auto"
      />
      <div className="md-font">
        <h2 className="m-auto pt-2">{project}</h2>
        <h5 className="text-muted mt-2">
          {startDate == null ? `${endDate}` : `${startDate}-${endDate}`}
        </h5>
        <h2>
          <a href={`${link}`}>
            <GitHubIcon
              style={{
                fontSize: '40'
              }} />
          </a>
        </h2>
      </div>
    </Container>
  )
}

export default ({ html, frontmatter, image }) => {
  return (
    <Container className="p-1 project-link text-center">
      <Row>
        <Col className="col-md-4 col-12">
          <ProjectCard frontmatter={frontmatter} image={image} />
        </Col>
        <Col className="col-md-8 col-12">
          <p
            className="text-justify mt-2"
            style={{ fontSize: 25, listStyleType: 'none' }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-md-4 col-1"></Col>
        <Col className="col-md-8 col-1">
          <div className="d-inline-flex">
            {frontmatter.tags.map(tag => (
              <Badge key={tag} pill className="mr-2 p-0 px-3 resume-tags">
                <h4>
                  <small>{tag}</small>
                </h4>
              </Badge>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
