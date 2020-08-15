import React from "react"
import { PageLayout, PageTitle } from "../components"
import { Container, Image } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import { SEO } from "../utils"

export default ({ data }) => {

  const {
    author,
    designations,
    unemployed,
  } = data.site.siteMetadata

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About Me" />
      <Container>
        <Image
          rounded
          width="140"
          height="140"
          src="../../icons/pfp.png"
          alt={author}
          styles={{ marginBottom: '5%' }}
        />
        <article className="w-75 mr-auto ml-auto mt-3 pt-2 text-justify">
          <p className="text-center">
            {designations.map((attr, i) => (
              <span key={attr}>
                &nbsp;<b>{attr}</b>&nbsp;
                {i < designations.length - 1 && <>||</>}
              </span>
            ))}
          </p>
          <p className="i-5 mt-4 pt-2">
            Hi there, I'm <b>Tony</b>. I am a sophomore at&nbsp;
            <a
              href="https://www.cornell.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cornell University
            </a>
            &nbsp;studying CS and minoring in Math.
          </p>
          <p className="i-5">
            I am passionate about designing technology for social impact. At the moment, I am a software developer at &nbsp;
            <a
              href="https://www.cornelldti.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cornell Design & Tech Initiative
            </a>
            &nbsp;helping solve real problems to assist the community.
            I have experience with both frontend web (React) and mobile (Android, Flutter, React Native) development. Also, my interests
            currently lie in full-stack development, PLT, and systems.
          </p>
          <p className="i-5">
            Aside from programming and tech, I enjoy music, basketball, photography, and food. In my free time, I am usually on
            a court playing pickup, taking pictures outside, or jamming out to some music.
          </p>
          <p className="i-5">
            Whether it is making games, websites, or mobile apps, my goal is to make things that others can enjoy as well.
            Check out my <Link to="/projects">projects</Link> to see my past and current work.
          </p>
          <br></br>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for Software Engineering Internships for Summer 2021</b>! If you
                  like what you <Link to="/projects">see</Link>, you can contact me at <b><a href="mailto:txy3@cornell.edu">txy3@cornell.edu</a></b>
                  !
                </small>
              </p>
            </>
          )}

        </article>
        <br></br>
      </Container>
    </PageLayout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
      }
    }
  }
`
