import React from "react"
import Layout, { COLOR_SCHEME } from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion } from "framer-motion"

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        image {
          sharp: childImageSharp {
            fluid {
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

  const options = { year: "numeric", month: "long", day: "numeric" }
  return (
    <Layout>
      <div
        css={css`
          width: 100%;
          height: 40vh;
          position: relative;
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

        <Link to="/">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            css={css`
              border: none;
              color: ${COLOR_SCHEME.darkBlue};
              font-size: 1.4rem;
              font-weight: 700;
              position: absolute;
              top: 0;
              left: 0;
              margin-left: 2%;
              margin-top: 1rem;
              padding: 5px 10px;
            `}
          >
            &larr; Posts
          </motion.span>
        </Link>
      </div>

      <div
        css={css`
          margin-left: 6%;
          margin-top: 1.2rem;
          width: 88%;
          display: flex;
          flex-flow: row wrap;
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
            Written on{" "}
            <span>{new Date(date).toLocaleDateString("en-US", options)}</span>
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
              margin-bottom: 0.75rem;
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
