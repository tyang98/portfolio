import React, { useContext } from "react"
import { graphql } from "gatsby"
import ThemeContext from "../utils/theme"
import { PageLayout } from "../components"
import { SEO } from "../utils"
import { Container, Image } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LightLogo from "../images/tony.png"
import DarkLogo from "../images/tony-dark.png"

export default ({ data }) => {
  const { firstName, lastName } = data.site.siteMetadata
  const { dark } = useContext(ThemeContext)
  return (
    <PageLayout>
      <SEO title="Home" />
      <Container className="text-center pt-5 mt-5" fluid>
        <p>
          <Image src={dark ? DarkLogo : LightLogo}></Image>
        </p>
        {
          <p className="mt-4">
            <h1
              style={{
                fontSize: "5rem",
                color: "black",
              }}
            >
              <span className="first-name">{firstName}</span>&nbsp;
              <span className="last-name">{lastName}</span>
            </h1>
          </p>
        }
        <Container className="py-0 my-0 mb-5">
          <p
            style={{
              fontSize: "1.5rem",
            }}
          >
            <i>
              <b>
                {" "}
                <span class="wave" role="img" aria-label="Wave">
                  👋
                </span>{" "}
                Senior Studying CS @ Cornell
                {" "}
                <span class="wave" role="img" aria-label="Wave">
                  👋
                </span>{" "}
              </b>
            </i>
          </p>
        </Container>
        <hr className="my-3 w-25 mb-5" />
        <div className="d-md-inline-flex icons-container">
          <Container style={{ flexDirection: "column" }}>
            <a href="/about" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={["fas", "user"]}
                className="icons user"
                title="About"
                style={{ marginBottom: "7.5%" }}
              />
            </a>

            <h4 style={{ color: "gray" }}>About</h4>
          </Container>

          <Container style={{ flexDirection: "column" }}>
            <a href="/projects" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={["fas", "flask"]}
                className="icons flask"
                title="Projects"
                style={{ marginBottom: "7.5%" }}
              />
            </a>
            <h4 style={{ color: "gray" }}>Projects</h4>
          </Container>

          <Container style={{ flexDirection: "column" }}>
            <a href="https://github.com/tyang98" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                className="icons github"
                title="Github"
                style={{ marginBottom: "7.5%" }}
              />
            </a>
            <h4 style={{ color: "gray" }}>GitHub</h4>
          </Container>

          <Container style={{ flexDirection: "column" }}>
            <a
              href="https://www.linkedin.com/in/tyang98/"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                className="icons linkedin"
                title="LinkedIn"
                style={{ marginBottom: "7.5%" }}
              />
            </a>
            <h4 style={{ color: "gray" }}>LinkedIn</h4>
          </Container>

          <Container style={{ flexDirection: "column" }}>
            <a
              href="mailto:txy3@cornell.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={["fas", "envelope"]}
                className="icons mail"
                title="e-mail"
                style={{ marginBottom: "7.5%" }}
              />
            </a>
            <h4 style={{ color: "gray" }}>Email</h4>
          </Container>

          <Container>
            <a href="../../resume.pdf" target="_blank">
              <FontAwesomeIcon
                icon={["fas", "file-alt"]}
                className="icons file"
                title="Resume"
                style={{ marginBottom: "7.5%" }}
              />
            </a>
            <h4 style={{ color: "gray" }}>Resume</h4>
          </Container>
        </div>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        firstName
        lastName
        occupation
      }
    }
  }
`
