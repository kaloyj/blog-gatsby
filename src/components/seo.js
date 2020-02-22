import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import useMainPhoto from "../hooks/useMainPhoto"

function SEO({ description, lang, meta, title, image, imageAlt }) {
  const url = typeof window !== "undefined" ? window.location.origin : ""
  const coverPhoto = useMainPhoto()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title || site.siteMetadata.title
  const metaImage = image || coverPhoto.src
  const metaAlt = imageAlt || "Carlo Janea smiling with trees on the background"

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={`${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: `${url}${metaImage}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: `${url}${metaImage}`,
        },
        {
          name: `twitter:image:src`,
          content: `${url}${metaImage}`,
        },
        {
          name: `twitter:image:alt`,
          content: metaAlt,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
}

export default SEO
