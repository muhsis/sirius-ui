import React from 'react'
import styled from 'styled-components'
import { Layout, SEO, Sidebar, Container, Content } from '../components'
import {
  Heading,
  Paragraph,
  Box,
  Button,
  TextInput,
  Stepper,
  Step,
} from '../../../src'

const PlaygroundPage = () => (
  <Layout>
    <Container>
      <SEO title="Playground" keywords={[`gatsby`, `application`, `react`]} />

      <Box maxWidth={960}>
        <Stepper>
          <Step title="Firma Bilgileri" description="This is a description.">
            Step 1 content.
          </Step>

          <Step
            title="Mali Takvim"
            description="This is a description. Longer one."
          >
            Step 2 content.
          </Step>

          <Step title="Son Adım." description="This is a description.">
            Step 3 content.
          </Step>
        </Stepper>
      </Box>

      <Box maxWidth={960} mt={5}>
        <Stepper currentIndex={1}>
          <Step title="Firma Bilgileri" isCompleted>
            Step 1 content.
          </Step>

          <Step title="Mali Takvim">Step 2 content.</Step>

          <Step title="Son Adım.">Step 3 content.</Step>
        </Stepper>
      </Box>

      <Box maxWidth={960} mt={5}>
        <Stepper
          currentIndex={1}
          onChange={index => {
            console.log('stepper changed with index', index)
          }}
        >
          <Step title="Firma Bilgileri" description="This is a description.">
            Step 1 content.
          </Step>

          <Step title="Mali Takvim" description="This is a description.">
            Step 2 content.
          </Step>
        </Stepper>
      </Box>
    </Container>
  </Layout>
)

export default PlaygroundPage
