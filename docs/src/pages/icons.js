import React from 'react'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import { Heading, Paragraph } from '../../../src'

const IconsPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Sidebar />
    <Container>
      <Content>
        <Heading>Icons</Heading>
        <Paragraph>
          We use Entypo for our icons. Also use SVGR and @svgr/cli tool to
          generate react icon components from svgs. Add a syntax highlighter and
          explain everything here. How to use icons? How to color them? What to
          watch out for?
        </Paragraph>
      </Content>
    </Container>
  </Layout>
)

export default IconsPage
