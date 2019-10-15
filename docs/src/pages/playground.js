import React from 'react'
import styled from 'styled-components'
import { Layout, SEO, Sidebar, Container, Content } from '../components'
import { Heading, Paragraph, Box, Button, TextInput } from '../../../src'

const PlaygroundPage = () => (
  <Layout>
    <Container>
      <SEO title="Playground" keywords={[`gatsby`, `application`, `react`]} />

      <Box>
        <Button type="button" mr={1}>
          Sample Button
        </Button>
        <Button type="button" loading>
          Sample Button
        </Button>
      </Box>

      <Box mt={3}>
        <TextInput
          id="inp1"
          name="inp1"
          type="text"
          inline
          width={300}
          size="lg"
        />
      </Box>
      <Box mt={1}>
        <TextInput
          id="inp2"
          name="inp2"
          type="text"
          inline
          width={300}
          hasError
        />
      </Box>
      <Box mt={1}>
        <TextInput
          id="inp3"
          name="inp3"
          type="text"
          inline
          width={300}
          minimal
          placeholder="Type something here."
        />
      </Box>
    </Container>
  </Layout>
)

export default PlaygroundPage
