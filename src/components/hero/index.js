import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "../layout"

const Hero = () => {
  return (
    <div
      css={css`
        height: 60vh;
        width: 100%;
        position: relative;
        border: 1px solid black;
        display: flex;
        flex-flow: row wrap;

        @media only screen and (min-width: 768px) {
          height: 40vh;
        }

        @media screen and (min-width: 1200px) {
          height: 42.5vh;
        }

        @media screen and (min-width: 1920px) {
          margin-bottom: 1rem;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          flex-flow: row wrap;
          align-content: center;
          flex: 0 0 92%;
          margin-left: 4%;
          height: 100%;
          align-items: center;

          p {
            color: ${COLOR_SCHEME.black}
            flex-basis: 90%;
            line-height: 1.5rem;
          }

          @media only screen and (min-width: 768px) {
            h1,
            h3 {
              text-align: center;
            }

            p {
              flex-basis: 80%;
              font-size: 1.75rem;
              line-height: 2.25rem;
            }
          }

          @media only screen and (min-width: 1920px) {
            width: 70%;

            p {
              font-size: 2rem;
              line-height: 2.5rem;
            }
          }
        `}
      >
        <p>
          A place where I deconstruct, investigate, and explain things I'm
          fascinated, curious, and troubled about in life, tech, and all the
          randomness in between.
        </p>

        <p
          css={css`
            margin-top: 1rem;
          `}
        >
          Welcome to{" "}
          <span
            css={css`
              font-weight: 700;
            `}
          >
            1px-solid-black.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Hero
