import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import elementRoutes from '../../elementRoutes'
import componentRoutes from '../../componentRoutes'
import logo from '../../images/logo.svg'
import { Box, Tag, Text, theme } from '../../../../src'

const ScSidebar = styled.aside`
  border-right: 2px solid #ebebeb;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 250px;
  overflow: hidden;
`

const ScLink = styled(Link)`
  text-decoration: none;
`

const ScSidebarBrand = styled.div`
  padding: 1.5rem 1rem 0.5rem 1rem;

  & img {
    height: 40px;
  }

  & div {
    color: #999;
    display: block;
    margin-top: 0.5rem;
  }
`

const ScSidebarContent = styled.aside`
  flex: 1;
  overflow-y: auto;
  margin-right: -999px;
  padding-right: 999px;
  padding-bottom: 1.5rem;
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
    color: ${theme.colors.slate};
    font-size: 16px;
    display: block;
    margin-bottom: 0.25rem;
    text-decoration: none;
    transition: color 0.15s, padding-left 0.15s;
  }

  & > a:hover {
    color: ${theme.colors.primary};
    padding-left: 0.25rem;
  }

  & > a.is-active {
    color: ${theme.colors.primary};
    font-weight: 500;
    position: relative;
  }

  & > a.is-active:after {
    color: ${theme.colors.primary};
    top: -1px;
    content: '•';
    position: absolute;
    right: 5px;
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
            to: '/',
          },
          {
            label: 'Colors',
            to: '/colors',
          },
          {
            label: 'System',
            to: '/system',
          },
          {
            label: 'Typography',
            to: '/typography',
          },
          {
            label: 'Theming',
            to: '/theming',
          },
          {
            label: 'Extras',
            to: '/extras',
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
      {
        title: 'Components',
        links: componentRoutes.map(route => {
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
          <ScLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Sirius UI" />
            <Text ml={2} fontSize="22px" color="shaft" fontWeight={600}>
              Sirius UI
            </Text>
          </ScLink>
          <div style={{ marginTop: '1rem' }}>
            <Tag variant="primary">v0.8.14</Tag>
          </div>
          <div>A design system & UI library for React.</div>
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
                    <Link key={to} activeClassName="is-active" to={to}>
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
