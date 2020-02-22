import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { COLOR_SCHEME } from "../layout"
import Codepen from "./assets/codepen.svg"
import Github from "./assets/github.svg"
import Twitter from "./assets/twitter.svg"
import { Link } from "gatsby"

const RectangularSVGContainerLink = styled("a")`
  height: 50px;
  width: 100px;
  margin: 0 4%;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    margin: 0 1%;
  }
`

const SVGContainerLink = styled("a")`
  height: 30px;
  width: 30px;
  margin: 0 4%;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    margin: 0 1%;
  }
`

const Footer = () => (
  <footer
    css={css`
      height: 20vh;
      margin-top: 2rem;
      background-color: ${COLOR_SCHEME.darkBlue};
      color: white;
      text-align: center;
      display: flex;
      flex-flow: row wrap;
      align-content: center;
      justify-content: center;

      @media only screen and (min-width: 768px) {
        justify-content: flex-end;
      }
    `}
  >
    <h4
      css={css`
        color: white;
        flex: 0 0 100%;
        display: flex;
        justify-content: center;
        text-align: center;

        @media only screen and (min-width: 768px) {
          justify-content: flex-end;
          text-align: right;
          flex: 0 0 30%;
          margin-right: 15%;
        }
      `}
    >
      © {new Date().getFullYear()}, Carlo Janea
    </h4>
    <div
      css={css`
        flex: 0 0 80%;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        margin-top: 4%;

        @media only screen and (min-width: 768px) {
          margin-top: 1%;
          margin-right: 15%;
          justify-content: flex-end;

          a:last-of-type {
            margin-right: 0;
          }
        }
      `}
    >
      <SVGContainerLink href="https://github.com/kaloyj">
        <Github height="100%" width="100%"></Github>
      </SVGContainerLink>

      <SVGContainerLink href="https://twitter.com/carlojanea">
        <Twitter height="100%" width="100%"></Twitter>
      </SVGContainerLink>

      <RectangularSVGContainerLink href="https://codepen.io/henrypeviani">
        <Codepen height="100%" width="100%"></Codepen>
      </RectangularSVGContainerLink>
    </div>
  </footer>
)

export default Footer
