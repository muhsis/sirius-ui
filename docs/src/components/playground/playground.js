import React, { Component } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { uniqueId } from 'lodash'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const ScPlayground = styled.div`
  background-color: #234361;
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 0.25rem;
`

const ScPlaygroundPreview = styled.div`
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 0 0 1px rgba(67, 90, 111, 0.14);
  margin: 0.25rem;
  padding: 1rem;
`

const ScPlaygroundEditor = styled.div`
  color: #fff;
`

const ScPlaygroundError = styled.div`
  padding: 0 0.5rem;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  background-color: #ec4c47;
  color: #f8f9f9;

  & .react-live-error {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
  }
`

const ScPlaygroundTitle = styled.h3`
  margin: 0 0 1rem 0;
  line-height: normal;
  padding: 0;
  font-weight: 500;
`

const ScCodeToggle = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  color: #dee1e3;
  cursor: pointer;
  font-size: 0.75rem;
  padding: 0.5rem 0;
  margin: 0.25rem;
  text-align: center;
  transition: color 0.15s, background-color 0.15s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.35);
    color: #fff;
  }
`

class Playground extends Component {
  static propTypes = {
    codeText: PropTypes.string.isRequired,
    scope: PropTypes.object,
    isCodeCollapsed: PropTypes.bool,
  }

  static defaultProps = {
    isCodeCollapsed: true,
  }

  constructor(props) {
    super(props)

    this.state = {
      uniqueId: uniqueId(),
      isCodeCollapsed: props.isCodeCollapsed,
      hasError: false,
      codeText: props.codeText,
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  handleToggle = () => {
    this.setState({
      isCodeCollapsed: !this.state.isCodeCollapsed,
    })
  }

  renderError = () => {
    return <div>Ooops, something went wrong.</div>
  }

  handleChange = codeText => {
    this.setState({
      codeText,
    })
  }

  render() {
    const { title, description, scope } = this.props
    const { codeText, isCodeCollapsed, hasError, uniqueId } = this.state

    if (hasError) return this.renderError()

    return (
      <>
        <ScPlaygroundTitle>{title}</ScPlaygroundTitle>
        {description}
        <LiveProvider
          scope={{ ReactDOM, ...scope }}
          code={codeText}
          mountStylesheet={false}
        >
          <ScPlayground data-iscodecollapsed={isCodeCollapsed}>
            <div>
              <ScPlaygroundError>
                <LiveError />
              </ScPlaygroundError>

              <ScPlaygroundPreview id={`code-playground-${uniqueId}`}>
                <LivePreview />
              </ScPlaygroundPreview>

              {!isCodeCollapsed && (
                <ScPlaygroundEditor>
                  <LiveEditor onChange={this.handleChange} />
                </ScPlaygroundEditor>
              )}
            </div>

            <ScCodeToggle
              aria-expanded={!isCodeCollapsed}
              role="button"
              aria-controls={`code-playground-${uniqueId}`}
              onClick={this.handleToggle}
            >
              {isCodeCollapsed ? 'Show code' : 'Hide code'}
            </ScCodeToggle>
          </ScPlayground>
        </LiveProvider>
      </>
    )
  }
}

export default Playground
