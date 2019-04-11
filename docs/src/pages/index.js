import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import { Heading, Paragraph, Code, Toaster, theme, Box } from '../../../src'
console.log('Box', Box)

const toaster = new Toaster(theme)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Sidebar />
    <Container>
      <Content>
        <Heading>Muhsis UI</Heading>
        <Paragraph>
          Muhsis UI is a design system and ui <Code>inline</Code> library
          developed with <a href="#">Styled Components 💅</a> and{' '}
          <a href="#">Styled System</a>.
        </Paragraph>
      </Content>
    </Container>
  </Layout>
)

export default IndexPage
