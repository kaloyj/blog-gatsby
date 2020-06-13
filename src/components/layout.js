import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import Footer from "./footer"

export const COLOR_SCHEME = {
  accent: "#2667FF",
  darkBlue: "#001B5A",
  lightestBlue: "#E3EDF4",
  codeBackground: "#E6E6E6",
  white: "#fbfef9",
  black: "#171219",
}
const Layout = ({ children, backgroundColor = COLOR_SCHEME.white }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            font-family: "Quicksand", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: ${COLOR_SCHEME.black};
              line-height: 1.1;
            }
          }
        `}
      ></Global>
      <div>
        <main
          css={css`
            min-height: 90vh;
            width: 100vw;
            background-color: ${backgroundColor};
          `}
        >
          {children}
        </main>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
