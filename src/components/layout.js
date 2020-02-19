import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import Footer from "./footer"

export const COLOR_SCHEME = {
  accent: "#2667FF",
  darkBlue: "#001B5A",
}
const Layout = ({ children }) => {
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
            font-family: "DM Sans", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            font-size: 18px;
            line-height: 1.4;

            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              color: ${COLOR_SCHEME.darkBlue};
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
