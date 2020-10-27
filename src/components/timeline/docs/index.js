import React from 'react'
import { Timeline, TimelineItem } from '..'
import {
  Paragraph,
  Code,
  Box,
  Button,
  IconTextDocument,
  IconCheck,
  IconAircraft,
} from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceTimeline from '!raw-loader!../src/Timeline'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'

const name = 'Timeline'
const introduction = (
  <Paragraph>
    A component to show information lists with a date-ordering look and feel.
  </Paragraph>
)

const scope = {
  Box,
  Button,
  Timeline,
  TimelineItem,
  IconTextDocument,
  IconCheck,
  IconAircraft,
}

const components = [
  {
    name: 'Timeline',
    source: sourceTimeline,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Timeline Example',
        description: (
          <Paragraph>
            Very basic <Code>Timeline</Code> component examples.
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
