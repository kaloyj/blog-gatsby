import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout, { COLOR_SCHEME } from "../../components/layout"
import SEO from "../../components/seo"
import ContentContainer from "../../components/content-container"
import NavBar from "../../components/navbar"
import PostHeader from "./post-header"
import { getSocialImage } from "../../../utils/cloudinary"

export const query = graphql`
  query($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
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
        titleBottomOffset
        taglineTopOffset
        excerpt
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
    slug,
    date,
    coverAlt,
    coverSource,
    excerpt,
    titleBottomOffset,
    taglineTopOffset,
    image: {
      sharp: { fluid },
    },
  } = frontmatter

  const image = getSocialImage({
    title,
    tagline: excerpt,
    date,
    // graphql returns null, we need undefined to trigger defaults
    titleBottomOffset: titleBottomOffset || undefined,
    taglineTopOffset: taglineTopOffset || undefined,
  })

  const seoImageAlt = `${title} - ${excerpt}`

  return (
    <Layout>
      <SEO
        title={`Blog | ${title}`}
        description={excerpt}
        image={image}
        imageAlt={seoImageAlt}
        pageUrl={`/${slug}`}
      />
      <ContentContainer>
        <NavBar></NavBar>

        <PostHeader title={title} date={date} excerpt={excerpt}></PostHeader>

        <div
          css={css`
            width: 80%;
            margin-left: 10%;
            height: 20vh;
            position: relative;

            @media only screen and (min-width: 1200px) {
              height: 40vh;
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
        <p
          css={css`
            flex: 0 0 100%;
            text-align: center;
            margin: 1rem 0;
            font-size: 0.75rem;

            @media only screen and (min-width: 1024px) {
              font-size: 1rem;
            }
          `}
        >
          Feature Photo by{" "}
          <span
            css={css`
              font-weight: 700;
            `}
          >
            {coverSource}
          </span>
        </p>

        <div
          css={css`
            flex: 0 0 100%;
            display: flex;
            flex-flow: row wrap;
            min-width: 0;

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

            pre {
              background: ${COLOR_SCHEME.codeBackground};
              max-width: 100%;
              width: 100%;
              overflow-x: auto;
              padding: 1rem;
              font-size: 0.85rem;
              margin-bottom: 0.75rem;
            }

            ol,
            ul {
              margin-bottom: 1rem;
            }

            h3 {
              margin-bottom: 0.5rem;
            }
          `}
        >
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </ContentContainer>
    </Layout>
  )
}

export default PostTemplate
