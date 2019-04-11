import React from 'react'
import Badge from '../src/Badge'
import { Box } from '../../box'
import { Paragraph, Code } from '../../typography'

// Code examples
import exampleBadge from './examples/badge.example'
import exampleDots from './examples/dots.example'

const name = 'Badge'
const introduction = (
  <Paragraph>
    Documentation and examples for badges, our small count and labeling
    component.
  </Paragraph>
)

const scope = { Badge, Box }

const components = [
  {
    name: 'Badge',
    underDevelopment: false,
    examples: [
      {
        title: 'Badge Example',
        description: (
          <Paragraph>
            Very basic <Code>Badge</Code> component examples. Note that if{' '}
            <Code>count</Code> property is not set, or set to 0, badge will be
            hidden.
          </Paragraph>
        ),
        codeText: exampleBadge,
        scope,
      },
      {
        title: 'Dots Example',
        description: (
          <Paragraph>
            Badges can be used as dot indicators. These indicators have a nice,
            subtle animation. When <Code>isDot</Code> set to true, count will
            not be shown. You can also use <Code>Text</Code> property of this
            component when <Code>isDot</Code> mode set to true.
          </Paragraph>
        ),
        codeText: exampleDots,
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
