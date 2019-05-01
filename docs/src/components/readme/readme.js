import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { ReadmeComponent } from './index'
import {
  Tag,
  Heading,
  Paragraph,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
} from '../../../../src/'

class Readme extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    introduction: PropTypes.node,
    components: PropTypes.array,
  }

  render() {
    const { name, introduction, components, ...props } = this.props

    return (
      <>
        <Heading variant="h2">{name}</Heading>
        {introduction && <>{introduction}</>}

        <Box my={4}>
          <Table>
            <thead>
              <tr>
                <th>Component Name</th>
                <th>Development Status</th>
              </tr>
            </thead>
            <tbody>
              {components.map(component => (
                <tr key={component.name}>
                  <TableCell>{component.name}</TableCell>
                  <TableCell>
                    {component.underDevelopment ? (
                      <Tag variant="primary">IN PROGRESS</Tag>
                    ) : (
                      <Tag variant="success">DONE</Tag>
                    )}
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        </Box>

        <Heading variant="h4">Examples</Heading>
        <Paragraph mb={4}>
          You can find all examples for components developed in this module
          here.
        </Paragraph>

        {components.map(component => (
          <ReadmeComponent
            key={component.name}
            name={component.name}
            source={component.source}
            description={component.description}
            examples={component.examples}
          />
        ))}
      </>
    )
  }
}

export default Readme
