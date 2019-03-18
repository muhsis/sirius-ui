import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'
import { Playground } from '../playground'
import { Heading } from '../../../../src/'

class ReadmeComponent extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.node,
    examples: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.node,
        codeText: PropTypes.string.isRequired,
        scope: PropTypes.object.isRequired,
      }),
    ),
  }

  render() {
    const { examples } = this.props

    return (
      <>
        {examples.map(example => {
          return (
            <Playground
              key={example.title}
              title={example.title}
              description={example.description}
              codeText={example.codeText}
              scope={example.scope}
            />
          )
        })}
      </>
    )
  }
}

export default ReadmeComponent
