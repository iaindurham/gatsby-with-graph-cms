module.exports = {
  siteMetadata: {
    title: 'Gatsby and Prismic',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: 'https://api.graphcms.com/simple/v1/cji1abq172nvy0128h8bxzi3z',
        query: `{
          allLandingPages {
            title
            introBlurb
          }
        }`
      }
    },
    'gatsby-plugin-react-helmet'
  ],
}
