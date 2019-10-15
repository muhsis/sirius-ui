import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { PropTypesTable, Playground } from '../'
import { Heading } from '../../../../src/'

const ScPlaygroundExamples = styled.div``

class ReadmeComponent extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    source: PropTypes.string,
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
    const { examples, source } = this.props

    return (
      <>
        <ScPlaygroundExamples>
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
        </ScPlaygroundExamples>

        <PropTypesTable componentSource={source} />
      </>
    )
  }
}

export default ReadmeComponent
