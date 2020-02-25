import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Background from "./assets/blog-bg.svg"
import { COLOR_SCHEME } from "../layout"
import useMainPhoto from "../../hooks/useMainPhoto"

const Hero = () => {
  const { fluid: coverPhoto } = useMainPhoto()
  return (
    <div
      css={css`
        height: 80vh;
        width: 100%;
        position: relative;

        @media only screen and (min-width: 768px) {
          height: 60vh;
        }

        @media screen and (min-width: 1200px) {
          height: 60vh;
        }
      `}
    >
      <Background
        preserveAspectRatio="xMidYMid slice"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
        `}
      ></Background>

      <div
        css={css`
          display: flex;
          flex-flow: row wrap;
          align-content: center;
          width: 92%;
          margin-left: 4%;
          height: 100%;
          align-items: center;

          @media only screen and (min-width: 768px) {
            justify-content: center;

            h1,
            h3 {
              text-align: center;
            }
          }
        `}
      >
        <div
          css={css`
            height: 100px;
            width: 100px;
            border: 3px solid ${COLOR_SCHEME.accent};
            border-radius: 50%;
            overflow: hidden;
            z-index: 1;

            @media only screen and (min-width: 768px) {
              height: 150px;
              width: 150px;
            }

            @media screen and (min-width: 1200px) {
              height: 120px;
              width: 120px;
            }
          `}
        >
          <Img
            css={css`
              height: 100%;
              width: 100%;
              object-fit: cover;
            `}
            fluid={coverPhoto}
            alt="carlo janea's face"
            fadeIn={true}
          />
        </div>

        <div
          css={css`
            flex: 0 0 100%;
            margin: 1.25rem auto;
            display: flex;
            z-index: 1;

            @media only screen and (min-width: 768px) {
              justify-content: center;
            }
          `}
        >
          <h1
            css={css`
              margin-left: 0.3rem;
              flex-basis: 60%;
              color: white;
              text-transform: uppercase;
              font-weight: 700;
              letter-spacing: 0.1rem;

              @media only screen and (min-width: 768px) {
                flex-basis: 80%;
                font-size: 2.75rem;
                letter-spacing: 0.175rem;
              }

              @media screen and (min-width: 1200px) {
                flex-basis: 60%;
                padding: 0 10%;
                font-size: 2.25rem;
              }
            `}
          >
            Blogs and other blunders
          </h1>
        </div>

        <h3
          css={css`
            flex-basis: 90%;
            color: white;
            font-weight: 500;
            margin-left: 0.3rem;
            line-height: 1.5rem;
            z-index: 1;

            @media only screen and (min-width: 768px) {
              flex-basis: 70%;
              font-size: 1.75rem;
              line-height: 2rem;
            }

            @media screen and (min-width: 1200px) {
              flex-basis: 60%;
              font-size: 1.25rem;
            }
          `}
        >
          I'm Carlo Janea, a front-end engineer, and I write things  on tech,
          life, and just about anything.
        </h3>
      </div>
    </div>
  )
}

export default Hero
