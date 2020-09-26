module.exports = {
  siteMetadata: {
    title: `test-site-gatsby`,
    description: `Gatsby and Netify test`,
    author: `@KlutchDev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `test-site-gatsby`,
        short_name: `mytest`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
      },
    },
  ],
}
