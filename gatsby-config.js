module.exports = {
  siteMetadata: {
    title: 'Gatsby and Prismic',
  },
  plugins: [
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'sharecovercom',
        accessToken: 'MC5XeFRncFNBQUFDY3RhX0Jr.GO-_ve-_ve-_vWFmdCLvv73vv73vv73vv73vv73vv71S77-9FGrvv73vv70O77-9eO-_ve-_ve-_vRjvv73vv71nbe-_vQ'
      }
    },
    'gatsby-plugin-react-helmet'
  ],
}
