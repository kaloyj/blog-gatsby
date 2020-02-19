import React from "react"
import { css } from "@emotion/core"
import { COLOR_SCHEME } from "./layout"
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
    `}
  >
    © {new Date().getFullYear()}, Carlo Janea
  </footer>
)

export default Footer
