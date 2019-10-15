import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import * as reactDocs from 'react-docgen'
import PropTypeWrapper from './PropTypeWrapper'
import PropTypeDescription from './PropTypeDescription'
import PropTypeHeading from './PropTypeHeading'

import {
  Heading,
  Paragraph,
  Alert,
  Code,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableHeaderCell,
  Box,
} from '../../../../src'

class PropTypesTable extends PureComponent {
  static propTypes = {
    componentSource: PropTypes.string,
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    // Parsing the componentSrc is expensive, so we cache it in state rather than
    // computing it every time the component is rendered. Note the
    // componentWillReceiveProps method below where it is re-parsed as required.
    let componentDocs
    try {
      componentDocs = reactDocs.parse(props.componentSource)
    } catch (err) {
      // Gatsby build is having some issues atm.
      console.log('Error in react-docgen parse', err)
    }
    this.state = { componentDocs }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.componentSource !== this.props.componentSource) {
      const componentDocs = reactDocs.parse(newProps.componentSource)
      this.setState({ componentDocs })
    }
  }

  getTypeInfo(prop) {
    if (prop.type && typeof prop.type.value === 'string') {
      return (
        <div className="PropTypeTypeValue Content">
          Value type: <code>{prop.type.value}</code>
        </div>
      )
    }
  }

  isArrayOf = prop => {
    if (
      prop.type &&
      prop.type.name === 'arrayOf' &&
      typeof prop.type.value === 'object' &&
      typeof prop.type.value.raw === 'string'
    ) {
      return prop.type.value.raw
    }
  }

  render() {
    const { componentDocs } = this.state
    let propTypes
    if (Object.hasOwnProperty.call(componentDocs || {}, 'props')) {
      propTypes = Object.keys(componentDocs.props)
    }

    return (
      <Box mb={4}>
        <div className="Content">
          {componentDocs &&
            componentDocs.composes &&
            componentDocs.composes.length > 0 && (
              <Box mb={4}>
                <Heading variant="h3" mb={3}>
                  Properties
                </Heading>
                <Box>
                  <Alert
                    mb={4}
                    text={
                      <>
                        This component composes{' '}
                        {componentDocs.composes.map(filePath => (
                          <Code key={filePath} mr={2}>
                            {filePath.substring(filePath.indexOf('/') + 1)}
                          </Code>
                        ))}
                      </>
                    }
                  />
                </Box>
              </Box>
            )}
        </div>

        {propTypes && (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell width="150">Property Name</TableHeaderCell>
                <TableHeaderCell width="100">Type</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {propTypes.map(propName => {
                const prop = componentDocs.props[propName]
                const isArrayOf = this.isArrayOf(prop)

                return (
                  <PropTypeHeading
                    name={propName}
                    key={propName}
                    description={prop.description}
                    required={prop.required}
                    defaultValue={prop.defaultValue}
                    type={prop.type || {}}
                    isArrayOf={isArrayOf}
                  />
                )
              })}
            </TableBody>
          </Table>
        )}
      </Box>
    )
  }
}

export { PropTypesTable }
