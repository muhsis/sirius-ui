import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getElement from '../utils/getElement'
import { Layout, Sidebar } from '../components'

const PageContent = styled.div`
  margin-left: 250px;
  padding: 1rem;
`

export default class ElementTemplate extends PureComponent {
  static propTypes = {
    pageContext: PropTypes.object,
  }

  render() {
    return (
      <Layout>
        <Sidebar />
        <PageContent>
          <h1>{this.props.pageContext.name}</h1>Hello from element template.
        </PageContent>
      </Layout>
    )
  }
}
