import React from 'react'
import { SkeletonBodyText } from '..'
import { Paragraph, Code, Box } from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSkeletonBodyText from '!raw-loader!../src/SkeletonBodyText'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBody from './examples/body.example'

const name = 'Skeleton'
const introduction = (
  <Paragraph>
    Skeleton elements are used to provide a low fidelity representation of
    content before it appears on the page, and improves load times perceived by
    users.
  </Paragraph>
)

const scope = { Box, SkeletonBodyText }

const components = [
  {
    name: 'Skeleton Body Text',
    source: sourceSkeletonBodyText,
    underDevelopment: true,
    examples: [
      {
        title: 'Body Text Examples',
        description: (
          <Paragraph>
            <Code>SkeletonBodyText</Code> component also takes{' '}
            <Code>lines</Code> to render desired amount of lines.
          </Paragraph>
        ),
        codeText: exampleBody,
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
