import React from 'react'
import { Dropdown } from '..'
import {
  Paragraph,
  Code,
  Box,
  Button,
  ButtonIcon,
  Menu,
  MenuItem,
  MenuDivider,
} from '../../..'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceDropdown from '!raw-loader!../src/Dropdown'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

// Code examples
import exampleBasic from './examples/basic.example'

const name = 'Dropdown'
const introduction = (
  <Paragraph>
    A simple and compact dropdown that can be used for menus.
  </Paragraph>
)

const scope = { Box, Button, Dropdown, Menu, MenuItem, MenuDivider }

const components = [
  {
    name: 'Dropdown',
    source: sourceDropdown,
    underDevelopment: false,
    examples: [
      {
        title: 'Basic Dropdown Example',
        description: (
          <Paragraph>
            Very basic <Code>Dropdown</Code> component examples.
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
