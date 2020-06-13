import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../components/layout"

const NavBar = () => {
  return (
    <div
      css={css`
        display: flex;
        flex: 0 0 100%;
        flex-flow: row wrap;
        align-items: center;
        margin: 1rem 0;
      `}
    >
      <Link
        to="/"
        css={css`
          text-decoration: none;
          flex: 1 0 auto;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
        `}
      >
        <span
          css={css`
            color: ${COLOR_SCHEME.black};
            font-size: 1rem;
            letter-spacing: 0.1rem;

            @media only screen and (min-width: 768px) {
              font-size: 1.4rem;
            }

            @media only screen and (min-width: 1920px) {
              font-size: 1.75rem;
            }
          `}
        >
          1px-solid-black
        </span>
      </Link>

      <a
        href="https://carlojanea.com/"
        rel="noopener noreferrer"
        target="_blank"
        css={css`
          text-decoration: none;
          flex: 0 1 auto;
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          color: ${COLOR_SCHEME.black};
          font-size: 0.75rem;

          @media only screen and (min-width: 768px) {
            font-size: 1rem;
          }
        `}
      >
        the author
      </a>
    </div>
  )
}

export default NavBar
