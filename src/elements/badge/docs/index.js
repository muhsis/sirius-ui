import React from 'react'
import Badge from '../src/Badge'
import Pill from '../src/Pill'
import { Paragraph, Code } from '../../typography'

// Code examples
import exampleBadge from './examples/badge.example'
import examplePill from './examples/pill.example'

const name = 'Badge & Pill'
const introduction = (
  <Paragraph>
    Documentation and examples for badges, our small count and labeling
    component.
  </Paragraph>
)

const scope = { Badge, Pill }

const components = [
  {
    name: 'Badge',
    underDevelopment: true,
    examples: [
      {
        title: 'Badge Example',
        description: (
          <Paragraph>
            Very basic <Code>Badge</Code> component examples.
          </Paragraph>
        ),
        codeText: exampleBadge,
        scope,
      },
    ],
  },
  {
    name: 'Pill',
    underDevelopment: true,
    examples: [
      {
        title: 'Pill Example',
        description: (
          <Paragraph>
            Very basic <Code>Pill</Code> component examples. This is actually
            not a pill component. Pill is something else entirely. Need to
            change the name on this one!
          </Paragraph>
        ),
        codeText: examplePill,
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
