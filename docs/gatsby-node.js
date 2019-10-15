const path = require('path')
const webpack = require('webpack')
const elementRoutes = require('./src/elementRoutes')
const componentRoutes = require('./src/componentRoutes')

const elementTemplate = path.resolve(`src/templates/element.js`)
const componentTemplate = path.resolve(`src/templates/component.js`)

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions }) => {
  const { createPage } = actions

  // Create a page for each element in elementRoutes.js file
  elementRoutes.forEach(({ name, componentName, path }) => {
    createPage({
      path,
      component: elementTemplate,
      context: {
        name,
        componentName,
      },
    })
  })

  // Create a page for each component in componentRoutes.js file
  componentRoutes.forEach(({ name, componentName, path }) => {
    createPage({
      path,
      component: componentTemplate,
      context: {
        name,
        componentName,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
    module: {
      rules: [
        {
          test: /\.example/,
          use: [
            {
              loader: 'raw-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      // See https://github.com/FormidableLabs/react-live/issues/5
      new webpack.IgnorePlugin(/^(xor|props)$/),
    ],
    resolve: {
      // Force Gatsby to look for dependencies within the local node_modules from docs.
      modules: [path.join(__dirname, 'node_modules')],
    },
  })
}
