import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const PostPreview = ({ post }) => {
  const { title, image, coverAlt, excerpt } = post
  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 200,
  }
  return (
    <Link
      to={`/${post.slug}`}
      css={css`
        flex: 0 0 100%;
        display: flex;
        flex-flow: row wrap;

        @media screen and (min-width: 1200px) {
          flex: 0 0 44%;
          margin-left: 4%;
        }

        @media screen and (min-width: 1920px) {
          flex: 0 0 28%;
        }
      `}
    >
      <motion.div
        layoutTransition={spring}
        whileHover={{ scale: 1.025 }}
        whileTap={{ scale: 1 }}
        css={css`
          height: 250px;
          width: 100%;
          border-radius: 10px;
          overflow: hidden;
          margin: 1rem 0;
          position: relative;
          box-shadow: 10px 10px 44px -12px rgba(0, 27, 90, 1),
            2px 2px 8px -3px rgba(0, 27, 90, 1);

          @media screen and (min-width: 1920px) {
            margin: 1.5rem 0;
          }
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
            background: rgb(0, 27, 90);
            background: linear-gradient(
              180deg,
              rgba(0, 27, 90, 0.1334908963585434) 0%,
              rgba(0, 27, 90, 1) 100%
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
              color: white;
            `}
          >
            {title}
          </h3>

          <p
            css={css`
              color: white;
              margin-top: 0.125rem;
              font-size: 0.75rem;
            `}
          >
            {excerpt}
          </p>
        </div>
      </motion.div>
    </Link>
  )
}

export default PostPreview
