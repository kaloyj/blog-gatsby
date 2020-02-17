import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
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

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    date: post.frontmatter.date,
    coverSource: post.frontmatter.coverSource,
    coverAlt: post.frontmatter.coverAlt,
    author: post.frontmatter.author,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image.sharp.fluid,
    excerpt: post.frontmatter.excerpt,
  }))
}

export default usePosts
