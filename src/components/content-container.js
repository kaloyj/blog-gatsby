import React from "react"
import { css } from "@emotion/core"

const ContentContainer = ({ children }) => {
  return (
    <div
      css={css`
        width: 88%;
        background: white;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        margin-left: 6%;
        background: transparent;

        @media only screen and (min-width: 768px) {
          margin-left: 12%;
          width: 76%;
        }

        @media only screen and (min-width: 1024px) {
          margin-left: 16%;
          width: 68%;
        }
      `}
    >
      {children}
    </div>
  )
}

export default ContentContainer
