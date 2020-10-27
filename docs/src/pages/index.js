import React, { Component } from 'react'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import { Heading, Code, Toaster, theme, Box, Pagination } from '../../../src'

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Sidebar />
        <Container>
          <Content>
            <Heading variant="h2">Sirius UI</Heading>
            <p>
              Sirius UI is a design system and ui <Code>inline</Code> library
              developed with{' '}
              <a href="https://styled-components.com/">Styled Components 💅</a>{' '}
              and <a href="https://styled-system.com/">Styled System</a>.
            </p>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
