import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import elementRoutes from '../../elementRoutes'
import nitroLogo from '../../images/nitro-logo.png'

const ScSidebar = styled.aside`
  border-right: 2px solid #ebebeb;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
`

const ScSidebarBrand = styled.div`
  padding: 1.5rem 1rem 0.5rem 1rem;

  & img {
    height: 50px;
  }

  & small {
    color: #999;
    display: block;
  }
`

const ScSidebarContent = styled.aside`
  flex: 1;
  overflow-y: auto;
`

const ScSidebarDivider = styled.hr`
  border: 0.5px solid #ebebeb;
  margin: 1rem;
`

const ScSidebarNavTitle = styled.h3`
  color: #999;
  font-size: 14px;
  font-weight: 500;
  padding: 0 1rem;
  margin: 1rem 0 0.5rem;
  text-transform: uppercase;
`

const ScSidebarNav = styled.nav`
  padding: 0 1rem;

  & > a {
    font-size: 15px;
    display: block;
    margin-bottom: 0.25rem;
    text-decoration: none;
    transition: color 0.15s, padding-left 0.15s;
  }

  & > a:hover {
    padding-left: 0.25rem;
  }

  & > a.is-active {
    font-weight: 600;
  }

  & > a.is-active:hover {
    padding-left: 0;
  }
`

export default class Sidebar extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    groups: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        exact: PropTypes.bool,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            to: PropTypes.string,
            label: PropTypes.string,
          }),
        ),
      }),
    ),
  }

  static defaultProps = {
    groups: [
      {
        links: [
          {
            label: 'Getting Started',
            exact: true,
            to: '/',
          },
          {
            label: 'Colors',
            to: '/colors',
          },
          {
            label: 'Typography',
            to: '/typography',
          },
          {
            label: 'Layout',
            to: '/layout',
          },
          {
            label: 'System',
            to: '/system',
          },
          {
            label: 'Theming',
            to: '/theming',
          },
        ],
      },
      {
        title: 'Elements',
        links: elementRoutes.map(route => {
          return {
            label: route.name,
            to: route.path,
          }
        }),
      },
    ],
  }

  render() {
    const { children, groups, ...props } = this.props

    return (
      <ScSidebar {...props}>
        <ScSidebarBrand>
          <img src={nitroLogo} alt="KargoBurada UI" />
          <small>A design system & UI library for React.</small>
        </ScSidebarBrand>
        <ScSidebarDivider />
        <ScSidebarContent>
          {groups.map(group => {
            return (
              <div key={group.title || group.links[0].label}>
                {group.title && (
                  <ScSidebarNavTitle>{group.title}</ScSidebarNavTitle>
                )}
                <ScSidebarNav>
                  {group.links.map(({ label, to, exact }) => (
                    <Link
                      key={to}
                      activeClassName="is-active"
                      to={to}
                      exact={exact}
                    >
                      {label}
                    </Link>
                  ))}
                </ScSidebarNav>
              </div>
            )
          })}
        </ScSidebarContent>
      </ScSidebar>
    )
  }
}
