import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import {
  Heading,
  Paragraph,
  Code,
  Toaster,
  theme,
  Box,
  DataTable,
} from '../../../src'
console.log('DT', DataTable)

const toaster = new Toaster(theme)

const columns = ['Product', 'Price', 'SKU Number', 'Net quantity', 'Net sales']

const rows = [
  ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
  ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
  [
    'Navy Merino Wool Blazer with khaki chinos and yellow belt',
    '$445.00',
    124518,
    32,
    '$14,240.00',
  ],
]

const totals = ['Toplam : ', '', '', 255, '$155,830.00']

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

        <DataTable columns={columns} rows={rows} totals={totals} />
      </Content>
    </Container>
  </Layout>
)

export default IndexPage
