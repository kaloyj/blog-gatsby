import { graphql, useStaticQuery } from "gatsby"

const formatNodesToPost = (nodes = []) =>
  nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    coverSource: post.frontmatter.coverSource,
    coverAlt: post.frontmatter.coverAlt,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image.sharp.fluid,
    excerpt: post.frontmatter.excerpt,
  }))

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query postsQuery {
      all: allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          frontmatter {
            title
            date
            author
            slug
            coverSource
            coverAlt
            excerpt
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      life: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: {
            regex: "/(posts)/(dev-life|100-days-of-code)/.*.mdx$/"
          }
        }
      ) {
        nodes {
          frontmatter {
            title
            date
            author
            slug
            coverSource
            coverAlt
            excerpt
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
      others: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          fileAbsolutePath: { regex: "/(posts)/(reviews|randos)/.*.mdx$/" }
        }
      ) {
        nodes {
          frontmatter {
            title
            date
            author
            slug
            coverSource
            coverAlt
            excerpt
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }

      tech: allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/(posts)/(tech)/.*.mdx$/" } }
      ) {
        nodes {
          frontmatter {
            title
            date
            author
            slug
            coverSource
            coverAlt
            excerpt
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 300, maxHeight: 300) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  const all = formatNodesToPost(data.all.nodes)
  const life = formatNodesToPost(data.life.nodes)
  const others = formatNodesToPost(data.others.nodes)
  const tech = formatNodesToPost(data.tech.nodes)

  return { all, life, others, tech }
}

export default usePosts
