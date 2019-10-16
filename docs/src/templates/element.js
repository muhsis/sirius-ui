import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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