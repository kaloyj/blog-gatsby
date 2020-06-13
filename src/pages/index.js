import React, { useState, useMemo } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { css } from "@emotion/core"
import PostPreview from "../components/post-preview"
import usePosts from "../hooks/usePosts"
import { useDebounce } from "../hooks/useDebounce"
import Filter, { FILTERS } from "../components/filter"
import ContentContainer from "../components/content-container"
import NavBar from "../components/navbar"

const IndexPage = () => {
  const [searchKey, setSearchKey] = useState("")
  const [filter, setFilter] = useState(FILTERS.all)
  const debouncedSearchKey = useDebounce(searchKey, 700)
  const postsObject = usePosts()

  const filteredPosts = useMemo(() => {
    const currentPosts = postsObject[filter]
    return debouncedSearchKey
      ? currentPosts.filter(post =>
          post.title.toLowerCase().includes(debouncedSearchKey.toLowerCase())
        )
      : currentPosts
  }, [debouncedSearchKey, postsObject, filter])

  return (
    <Layout>
      <SEO />
      <ContentContainer>
        <NavBar></NavBar>
        <Hero></Hero>

        <div
          css={css`
            display: flex;
            flex: 0 0 100%;

            flex-flow: row wrap;
            align-items: center;
            justify-content: space-between;
            margin-top: 1rem;
          `}
        >
          <div
            css={css`
              flex: 1 0 auto;
              display: flex;
              flex-flow: row wrap;
              align-items: center;
            `}
          >
            <h2>Posts</h2>
          </div>

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
                padding-left: 0.75rem;
                font-family: "Quicksand";
              `}
              value={searchKey}
              onChange={e => setSearchKey(e.target.value)}
            ></input>
          </div>
          <Filter currentFilter={filter} setFilter={setFilter}></Filter>
        </div>

        {debouncedSearchKey && filteredPosts.length === 0 ? (
          <h3
            css={css`
              margin-top: 1rem;
              @media screen and (min-width: 1200px) {
                margin-left: 4%;
              }
            `}
          >
            No posts found.
          </h3>
        ) : (
          <div
            css={css`
              flex: 0 0 100%;
              display: flex;
              flex-flow: row wrap;

              @media screen and (min-width: 1024px) {
                justify-content: space-between;
              }
            `}
          >
            {filteredPosts.map(post => (
              <PostPreview key={post.slug} post={post}></PostPreview>
            ))}
          </div>
        )}
      </ContentContainer>
    </Layout>
  )
}
export default IndexPage
