import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { css } from "@emotion/core"
import PostPreview from "../components/post-preview"
import usePosts from "../hooks/usePosts"
import { useDebounce } from "../hooks/useDebounce"

const IndexPage = () => {
  const [searchKey, setSearchKey] = useState("")
  const debouncedSearchKey = useDebounce(searchKey, 700)
  const posts = usePosts()

  const filteredPosts = debouncedSearchKey
    ? posts.filter(post =>
        post.title.toLowerCase().includes(debouncedSearchKey.toLowerCase())
      )
    : posts

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
        <div
          css={css`
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
          `}
        >
          <h2>Posts</h2>
          <div
            css={css`
              flex: 0 1 auto;
            `}
          >
            <input
              placeholder="Search posts"
              css={css`
                border: none;
                border-radius: 15px;
                background-color: #e8e8e8;
                height: 1.75rem;
                padding-left: 0.5rem;
                font-family: "DM Sans";
              `}
              value={searchKey}
              onChange={e => setSearchKey(e.target.value)}
            ></input>
          </div>
        </div>

        {filteredPosts.map(post => (
          <PostPreview post={post}></PostPreview>
        ))}
      </div>
    </Layout>
  )
}
export default IndexPage
