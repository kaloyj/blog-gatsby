import { graphql, useStaticQuery } from "gatsby"

const useMainPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cover-photo.jpeg" }) {
        childImageSharp {
          resize {
            src
          }
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return data.placeholderImage.childImageSharp
}

export default useMainPhoto
