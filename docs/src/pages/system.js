import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Container,
  Content,
  Layout,
  SEO,
  Sidebar,
  Playground,
} from '../components'
import { Heading, Code, Toaster, theme, Box } from '../../../src'

// Examples
import systemCodeText from '../examples/sink.example'

// Scopes
const systemScope = { Box }

const toaster = new Toaster(theme)

class SystemPage extends Component {
  itemSelected = () => {
    console.log('item selected!')
  }

  paginationOnChange = value => {
    toaster.info(
      'Hello world!',
      'Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    )
  }

  render() {
    return (
      <Layout>
        <SEO
          title="Design System"
          keywords={[`gatsby`, `application`, `react`]}
        />
        <Sidebar />
        <Container>
          <Content>
            <Heading variant="h2">Design System</Heading>
            <p>
              Sirius UI is developed with{' '}
              <a href="https://styled-system.com/">Styled System</a>. Styled
              System is a collection of utility functions that add style props
              to your React components and allows you to control styles based on
              a global theme object with typographic scales, colors, and layout
              properties.
            </p>

            <Playground
              title="Box Examples"
              scope={systemScope}
              codeText={systemCodeText}
            />

            <p>
              You can visit{' '}
              <a href="https://styled-system.com/table">reference table</a> for
              full list of features that you can use with styled-system. Also,
              properties you can use for individual components are documented in
              their respective documentation pages. But generally, you can apply
              spacing styles to almost all of the components.
            </p>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default SystemPage
