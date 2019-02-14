import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { theme, Normalize } from '../../../../src'
console.log('Active theme', theme)

class Layout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <ThemeProvider theme={theme}>
            <>
              <Normalize />
              {this.props.children}
            </>
          </ThemeProvider>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
