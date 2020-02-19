import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { css } from "@emotion/core"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = () => {
  const data = useStaticQuery(graphql`
    query($slug: String) {
      mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
          title
          coverAlt
          coverSource
        }
      }
    }
  `)

  return (
    <Layout>
      <div>hello</div>
    </Layout>
  )
}

export default PostTemplate
