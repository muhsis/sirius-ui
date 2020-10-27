import React from 'react'
import { Progress } from '..'
import { Paragraph, Code, Box, Button } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceProgress from '!raw-loader!../src/Progress'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleStriped from './examples/striped.example'

const name = 'Progress'
const introduction = (
  <Paragraph>A simple component to show a customized progress bar.</Paragraph>
)

const scope = { Box, Button, Progress }

const components = [
  {
    name: 'Progress',
    source: sourceProgress,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Progress Example',
        description: (
          <Paragraph>
            Very basic <Code>Progress</Code> component examples.
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
