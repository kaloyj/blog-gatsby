import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { css } from "@emotion/core"
import PostPreview from "../components/post-preview"
import usePosts from "../hooks/usePosts"

const IndexPage = () => {
  const posts = usePosts()
  console.log({ posts })
  return (
    <Layout>
      <SEO />
      <Hero></Hero>
      <div
        css={css`
          width: 90%;
          margin-left: 5%;
          margin: 1rem auto;
        `}
      >
        <h2>Posts</h2>
        {posts.map(post => (
          <PostPreview post={post}></PostPreview>
        ))}
      </div>
    </Layout>
  )
}
export default IndexPage
