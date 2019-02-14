import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getElement from '../utils/getElement'
import { Container, Layout, Sidebar } from '../components'

export default class ElementTemplate extends PureComponent {
  static propTypes = {
    pageContext: PropTypes.object,
  }

  render() {
    return (
      <Layout>
        <Sidebar />
        <Container>
          <h1>{this.props.pageContext.name}</h1>Hello from element template.
        </Container>
      </Layout>
    )
  }
}
