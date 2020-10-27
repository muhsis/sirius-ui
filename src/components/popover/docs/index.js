import React from 'react'
import { Popover } from '..'
import { Paragraph, Code, Box, Button, Text, Strong } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourcePopover from '!raw-loader!../src/Popover'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'
import exampleAdvanced from './examples/advanced.example'

const name = 'Popover'
const introduction = (
  <Paragraph>
    A simple text popup tip. The Popover component is used to describe
    something. In some cases tooltips are used to show more content, this should
    be used cautiously since it is hard to be completely accessible.
  </Paragraph>
)

const scope = { Box, Button, Popover, Text, Strong }

const components = [
  {
    name: 'Popover',
    source: sourcePopover,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Popover Example',
        description: (
          <Paragraph>
            Very basic <Code>Popover</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBasic,
        scope,
      },
      {
        title: 'Advanced Popover Examples',
        description: (
          <Paragraph>
            You can change the placement of the <Code>Popover</Code> component.
          </Paragraph>
        ),
        codeText: exampleAdvanced,
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
