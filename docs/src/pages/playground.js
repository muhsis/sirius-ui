import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Datetime from 'react-datetime'

import { Layout, SEO, Sidebar, Container, Content } from '../components'
import {
  Heading,
  Paragraph,
  Box,
  Button,
  TextInput,
  Stepper,
  Step,
  DatePicker,
} from '../../../src'

const PlaygroundPage = () => {
  const [startsAt, setstartsAt] = useState('01/01/2019')

  return (
    <Layout>
      <Container>
        <SEO title="Playground" keywords={[`gatsby`, `application`, `react`]} />

        <Box maxWidth={360} bg="blue">
          <DatePicker
            dateFormat="DD/MM/YYYY"
            value={startsAt}
            onChange={value => {
              console.log('value changed', value.format('DD/MM/YYYY'))
              setstartsAt(value.format('DD/MM/YYYY'))
            }}
          />
        </Box>

        <Box maxWidth={360} mt={4}>
          <Datetime />
        </Box>
      </Container>
    </Layout>
  )
}

export default PlaygroundPage
