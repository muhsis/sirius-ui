import React, { Component } from 'react'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import { Heading, Code, Toaster, theme, Box, Pagination } from '../../../src'

class ExtrasPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Extras" keywords={[`gatsby`, `application`, `react`]} />
        <Sidebar />
        <Container>
          <Content>
            <Heading variant="h2">Extras</Heading>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default ExtrasPage
