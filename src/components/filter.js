import React from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"
import { COLOR_SCHEME } from "./layout"

export const FILTERS = {
  all: "all",
  tech: "tech",
  life: "life",
  others: "others",
}

const FILTER_OPTIONS = Object.values(FILTERS).map(filter => ({
  value: filter,
}))

const Filter = ({ currentFilter, setFilter }) => {
  return (
    <div
      css={css`
        margin: 0.5rem 0 0.1rem;
        flex: 0 0 100%;
      `}
    >
      {FILTER_OPTIONS.map(({ value }) => (
        <motion.button
          key={value}
          onClick={() => setFilter(value)}
          whileTap={{ scale: 0.9 }}
          css={css`
            border: none;
            font-size: 0.7rem;
            border-radius: 5px;
            margin-right: 0.5rem;
            font-weight: ${value === currentFilter ? "700" : "400"};
            padding: ${value === currentFilter ? "0.25rem 0.5rem" : 0};
            color: ${value === currentFilter ? "white" : COLOR_SCHEME.darkBlue};
            background-color: ${value === currentFilter
              ? COLOR_SCHEME.accent
              : "white"};

            transition: all 0.2s ease;
            text-transform: capitalize;
          `}
        >
          {value}
        </motion.button>
      ))}
    </div>
  )
}

export default Filter
