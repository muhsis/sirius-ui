import React from 'react'
import { Pagination } from '..'
import { Paragraph, Code, Box, Button } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourcePagination from '!raw-loader!../src/Pagination'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'

const name = 'Pagination'
const introduction = (
  <Paragraph>A presentational pagination component.</Paragraph>
)

const scope = { Box, Button, Pagination }

const components = [
  {
    name: 'Pagination',
    source: sourcePagination,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Pagination Example',
        description: (
          <Paragraph>
            Very basic <Code>Pagination</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
    ],
  },
]

export default {
  name,
  introduction,
  components,
}
