/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My First Gatsby Portfolio with GraphQL`,
    description: `My First Front End Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e7gsyqd8m8w4`,
        accessToken: `-kmhykSmRgcw9HetLADSMZowqmM8ZcelQQ3QyvHE15E`,
    },
  },
  `gatsby-plugin-sass`
],
}
    