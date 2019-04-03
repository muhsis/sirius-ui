import React from 'react'
import Box from '../src/Box'
import { Paragraph, Code } from '../../typography'

// Code examples
import exampleBoxBasic from './examples/basic.example'
import exampleBoxAdvanced from './examples/advanced.example'

const name = 'Box'
const introduction = (
  <Paragraph>
    The <Code>Box</Code> component implementes a basic building block that takes
    a lot of styling options. You can use <Code>Box</Code> component as the main
    building block.
  </Paragraph>
)

const scope = { Box }

const components = [
  {
    name: 'Box',
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Box Example',
        description: (
          <Paragraph>
            Very basic <Code>Box</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBoxBasic,
        scope,
      },
      {
        title: 'Advanced Box Example',
        codeText: exampleBoxAdvanced,
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
