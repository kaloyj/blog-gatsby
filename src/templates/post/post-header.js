import React from "react"
import { css } from "@emotion/core"

const PostHeader = ({ title, date, excerpt }) => {
  return (
    <div
      css={css`
        flex: 0 0 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin-bottom: 1rem;

        p {
          font-size: 0.75rem;
          flex: 0 0 100%;
          text-align: center;

          @media only screen and (min-width: 1024px) {
            font-size: 1rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          margin-top: 1.25rem;
        }
      `}
    >
      <h1
        css={css`
          flex: 0 0 100%;
          text-align: center;
          margin-bottom: 0.5rem;

          @media only screen and (min-width: 768px) {
            flex: 0 0 80%;
          }
        `}
      >
        {title}
      </h1>

      <p>Written on {date}</p>
      <p>{excerpt}</p>
    </div>
  )
}

export default PostHeader
