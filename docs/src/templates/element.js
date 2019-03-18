import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import getElement from '../utils/getElement'
import { Container, Content, Layout, Sidebar, SEO, Readme } from '../components'

export default class ElementTemplate extends PureComponent {
  static propTypes = {
    pageContext: PropTypes.object,
  }

  render() {
    const { name, introduction, components } = getElement(
      this.props.pageContext.componentName,
    )
    console.log(name, introduction)

    return (
      <Layout>
        <SEO title={`${this.props.pageContext.name} Element`} />
        <Sidebar />
        <Container>
          <Content>
            <Readme
              name={name}
              introduction={introduction}
              components={components}
            />
          </Content>
        </Container>
      </Layout>
    )
  }
}
