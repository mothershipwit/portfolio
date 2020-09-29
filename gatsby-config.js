/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Recipes From My Kitchen`,
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
  `gatsby-plugin-sass`,
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `limelight`,
        `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ],
      display: 'swap'
    }
  }
],
}
    