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
  NumberInput,
  TextInput,
  Button,
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

        <Box my={5}>
          <TextInput type="text" name="test" inline mr={0} />
          <Button mx={1}>Sample</Button>

          <NumberInput
            thousandSeparator={true}
            suffix={' ₺'}
            placeholder="Enter Money Value"
            mr={1}
            inline
          />
          <NumberInput
            thousandSeparator={true}
            suffix={' ₺'}
            placeholder="2,450"
            width={100}
            mr={1}
            inline
          />
        </Box>

        <Box my={5}>
          <TextInput type="text" name="test" mr={0} size="sm" inline />
          <Button mr={4} size="sm">
            Sample
          </Button>
        </Box>

        <Box my={5}>
          <TextInput type="text" name="test" mr={0} size="lg" inline />
          <Button mr={4} size="lg">
            Sample
          </Button>
        </Box>

        <Box my={5}>
          <Box display="inline-block" mr={2}>
            <TextInput type="text" size="sm" />
          </Box>
          <Box display="inline-block" mr={2}>
            <TextInput type="text" />
          </Box>
          <Box display="inline-block" mr={2}>
            <TextInput type="text" size="lg" />
          </Box>
        </Box>

        <Box my={5}>
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
        </Box>

        <DataTable columns={columns} rows={rows} totals={totals} />
      </Content>
    </Container>
  </Layout>
)

export default IndexPage
