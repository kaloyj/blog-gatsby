import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { COLOR_SCHEME } from "./layout"

const PostPreview = ({ post }) => {
  const { title, image, coverAlt, excerpt } = post
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 200,
  }
  return (
    <motion.div
      layoutTransition={spring}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 1 }}
      css={css`
        flex: 0 0 100%;
        display: flex;
        flex-flow: row wrap;
        border-radius: 10px;
        overflow: hidden;
        margin: 1rem 0;
        position: relative;
        box-shadow: 10px 10px 44px -12px rgba(23, 18, 25, 1),
          2px 2px 8px -3px rgba(23, 18, 25, 1);

        @media screen and (min-width: 1024px) {
          flex: 0 0 48%;
        }

        @media screen and (min-width: 1920px) {
          margin: 1.5rem 0;
          flex: 0 0 32%;
        }
      `}
    >
      <Link
        to={`/${post.slug}`}
        css={css`
          height: 250px;
          width: 100%;
        `}
      >
        <Img
          css={css`
            height: 100%;
            width: 100%;
            object-fit: cover;
          `}
          fluid={image}
          alt={coverAlt}
          fadeIn={true}
        />
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgb(23, 18, 25);
            background: linear-gradient(
              180deg,
              rgba(23, 18, 25, 0.1334908963585434) 0%,
              rgba(23, 18, 25, 1) 100%
            );
          `}
        ></div>
        <div
          css={css`
            width: 92%;
            position: absolute;
            left: 4%;
            bottom: 8%;
          `}
        >
          <h3
            css={css`
              color: ${COLOR_SCHEME.lightestBlue};
            `}
          >
            {title}
          </h3>

          <p
            css={css`
              color: ${COLOR_SCHEME.lightestBlue};
              margin-top: 0.125rem;
              font-size: 0.75rem;
            `}
          >
            {excerpt}
          </p>
        </div>{" "}
      </Link>
    </motion.div>
  )
}

export default PostPreview
