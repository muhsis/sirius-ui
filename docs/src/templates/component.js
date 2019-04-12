import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import getComponent from '../utils/getComponent'
import { Container, Content, Layout, Sidebar, SEO, Readme } from '../components'

export default class ComponentTemplate extends PureComponent {
  static propTypes = {
    pageContext: PropTypes.object,
  }

  render() {
    const { name, introduction, components } = getComponent(
      this.props.pageContext.componentName,
    )

    return (
      <Layout>
        <SEO title={`${this.props.pageContext.name} Component`} />
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
