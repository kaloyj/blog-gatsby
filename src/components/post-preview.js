import React from "react"
import { css } from "@emotion/core"

const PostPreview = ({ post }) => {
  const { title } = post
  return (
    <div
      css={css`
        height: 250px;
        width: 100%;
        border: 2px solid black;
        border-radius: 10px;
        overflow: hidden;
        margin: 1rem 0;
      `}
    >
      <h1>{title}</h1>
    </div>
  )
}

export default PostPreview
