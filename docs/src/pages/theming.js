import React, { Component } from 'react'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import { Box, Heading, Paragraph, DatePicker } from '../../../src'

class ThemingPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Theming" keywords={[`gatsby`, `application`, `react`]} />
        <Sidebar />
        <Container>
          <Content>
            <Heading>Theming</Heading>
            <Paragraph>
              Will give detailed information on theming here.
            </Paragraph>

            <Box my={4}>
              <DatePicker />
            </Box>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default ThemingPage
