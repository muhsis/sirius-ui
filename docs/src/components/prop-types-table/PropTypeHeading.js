import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Code, Text, TableRow, TableCell } from '../../../../src'

export default class PropTypeHeading extends PureComponent {
  static propTypes = {
    defaultValue: PropTypes.any,
    name: PropTypes.string,
    description: PropTypes.string,
    required: PropTypes.bool,
    type: PropTypes.any,
    isArrayOf: PropTypes.string,
  }

  render() {
    const {
      defaultValue,
      name,
      description,
      required,
      type,
      isArrayOf,
    } = this.props

    return (
      <TableRow>
        <TableCell>
          <Text color="shaft">{name}</Text>
          {defaultValue ? (
            <Text color="silver"> - {defaultValue.value}</Text>
          ) : null}
        </TableCell>
        <TableCell>
          <Code>{type.name}</Code>
          {isArrayOf && (
            <span className="PropTypeHeading-arrayOf">{isArrayOf}</span>
          )}
          {required ? (
            <span className="PropTypeHeading-required">required</span>
          ) : null}
        </TableCell>
        <TableCell>{description}</TableCell>
      </TableRow>
    )
  }
}
