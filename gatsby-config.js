module.exports = {
  siteMetadata: {
    title: `Blog | Carlo Janea`,
    description: `My name's Carlo Janea, a front end engineer in Cebu, Philippines. These are my blogs on tech, life stories, and anything I've thought upon.`,
    author: `@carlojanea`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["DM Sans:400,500,700"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "100-days-of-code",
        path: "posts/100-days-of-code",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "dev-life",
        path: "posts/dev-life",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "reviews",
        path: "posts/reviews",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: ["gatsby-remark-images"],
        plugins: ["gatsby-remark-images"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
