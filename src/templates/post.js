import React from "react"
import Layout, { COLOR_SCHEME } from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image {
          sharp: childImageSharp {
            fluid(maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        coverAlt
        coverSource
      }
      body
    }
  }
`

const PostTemplate = ({
  data: {
    mdx: { frontmatter, body },
  },
}) => {
  const {
    title,
    date,
    coverAlt,
    coverSource,
    image: {
      sharp: { fluid },
    },
  } = frontmatter

  return (
    <Layout>
      <div
        css={css`
          width: 88%;
          height: 10vh;
          background: white;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          margin-left: 6%;

          @media only screen and (min-width: 768px) {
            margin-left: 4%;
            width: 92%;
          }
        `}
      >
        <Link
          to="/"
          css={css`
            text-decoration: none;
            flex: 0 0 70%;
            display: flex;
            flex-flow: row wrap;
            align-items: center;

            @media only screen and (min-width: 768px) {
              flex: 0 0 35%;
            }

            @media only screen and (min-width: 1200px) {
              flex: 0 0 30%;
            }

            @media only screen and (min-width: 1920px) {
              flex: 0 0 25%;
            }
          `}
        >
          <span
            css={css`
              display: flex;
              flex-flow: row wrap;
              flex-basis: 75%;
              color: ${COLOR_SCHEME.darkBlue};
              font-size: 1rem;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.1rem;

              @media only screen and (min-width: 768px) {
                font-size: 1.25rem;
              }

              @media only screen and (min-width: 1920px) {
                font-size: 1.5rem;
              }
            `}
          >
            Blogs And Blunders
          </span>
        </Link>
      </div>
      <div
        css={css`
          width: 100%;
          height: 40vh;
          position: relative;

          @media only screen and (min-width: 1200px) {
            height: 60vh;
          }
        `}
      >
        <Img
          css={css`
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
          `}
          fluid={fluid}
          alt={coverAlt}
          fadeIn
        ></Img>
      </div>

      <div
        css={css`
          margin-left: 6%;
          margin-top: 1.2rem;
          width: 88%;
          display: flex;
          flex-flow: row wrap;

          @media only screen and (min-width: 768px) {
            margin-top: 2rem;
            margin-left: 15%;
            width: 70%;
          }
        `}
      >
        <div
          css={css`
            display: flex;
            flex: 0 0 100%;
            flex-flow: row wrap;

            p {
              flex: 0 0 100%;
              font-size: 0.9rem;
              margin-top: 0.2rem;

              span {
                font-weight: 700;
              }
            }

            p:first-of-type {
              margin-top: 0.75rem;
            }

            p:last-of-type {
              margin-bottom: 0.75rem;
            }
          `}
        >
          <h2
            css={css`
              flex: 0 0 80%;
            `}
          >
            {title}
          </h2>
          <p>
            Written on <span>{date}</span>
          </p>
          <p>
            Cover Photo by <span>{coverSource}</span>
          </p>
        </div>

        <div
          css={css`
            flex: 0 0 100%;
            display: flex;
            flex-flow: row wrap;

            p,
            span {
              font-size: 1.125rem;
              line-height: 1.75rem;
            }

            p {
              flex: 0 0 100%;
              margin-bottom: 0.75rem;
              img {
                width: 100%;
                height: 100%;
              }
            }
          `}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

export default PostTemplate
