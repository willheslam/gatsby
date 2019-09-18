module.exports = {
  siteMetadata: {
    title: 'My Gatsby Site'
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': 'AuthorsYaml'
  },
  plugins: [
    // Adding various source folders to the GraphQL layer.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Cinzel`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          },
          {
            family: `Amatic SC`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          },
          {
            family: `Fredericka the Great`,
            subsets: [`latin`],
            variants: [`400`]
          },
          {
            family: `IM Fell Great Primer`,
            subsets: [`latin`],
            variants: [`400`]
          },
          {
            family: `IM Fell English`,
            subsets: [`latin`],
            variants: [`400`]
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          }
        ],
      },
    },
    'gatsby-background-image',
    'gatsby-background-image-es5',
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
    'gatsby-transformer-yaml',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-emotion'
  ]
};
