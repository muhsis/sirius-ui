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
  NumberInput,
  ButtonGroup,
} from '../../../src'

const PlaygroundPage = () => {
  const [startsAt, setstartsAt] = useState('01/01/2019')
  const [price, setPrice] = useState({ formattedValue: 25.99 })

  return (
    <Layout>
      <Container>
        <SEO title="Playground" keywords={[`gatsby`, `application`, `react`]} />

        <Box mb={5} maxWidth={300}>
          <ButtonGroup>
            <Button type="button" outline>
              First
            </Button>
            <Button type="button">Second</Button>
            <Button type="button" outline>
              Third
            </Button>
          </ButtonGroup>
        </Box>

        <Box maxWidth={360} mb={4}>
          <NumberInput
            id="price"
            name="price"
            value={price.formattedValue}
            thousandSeparator={true}
            suffix={' TL'}
            textAlign="left"
            inline
            width={100}
            placeholder="Price"
            onValueChange={values => {
              setPrice(values)
            }}
          />
        </Box>

        <Box maxWidth={360} bg="blue">
          <DatePicker
            dateFormat="DD/MM/YYYY"
            value={startsAt}
            position="top"
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
