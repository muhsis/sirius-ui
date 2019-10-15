import React, { Component } from 'react'
import { Layout, SEO, Sidebar } from '../components'
import {
  Box,
  Text,
  Paragraph,
  Dropdown,
  DropdownContent,
  Button,
  Menu,
  MenuItem,
  MenuDivider,
  boxiconsRegular,
  IconLogOut,
  IconChevronDown,
  IconAddress,
  IconChat,
  IconUser,
  IconAircraft,
} from '../../../src'

class LayoutPage extends Component {
  constructor(props) {
    super(props)

    this.handleOpenCloseDropdown = this.handleOpenCloseDropdown.bind(this)
    this.state = {
      dropdownOpen: true,
    }
  }

  handleOpenCloseDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Sidebar />
        <Box p={3} ml={250} mb={5}>
          <Dropdown
            placement="bottom-left"
            content={
              <Menu>
                <MenuItem as="a" href="#" target="_blank">
                  <IconAddress mr={3} />
                  Sample Menu Item
                </MenuItem>
                <MenuItem onClick={this.handleOpenCloseDropdown}>
                  <IconChat mr={3} />
                  Sample Menu Item
                </MenuItem>
                <MenuItem variant="warning">
                  <IconUser mr={3} />
                  Sample Menu Item
                </MenuItem>
                <MenuDivider />
                <MenuItem variant="success">
                  <IconAircraft mr={3} />
                  Sample Menu Item
                </MenuItem>
                <MenuItem variant="danger">
                  <IconLogOut mr={3} /> Çıkış Yap
                </MenuItem>
              </Menu>
            }
          >
            <Button>
              Dropdown <IconChevronDown />
            </Button>
          </Dropdown>
          <Paragraph>
            Maecenas faucibus mollis interdum. Curabitur blandit tempus
            porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at
            eros. Curabitur blandit tempus porttitor. Vestibulum id ligula porta
            felis euismod semper.
          </Paragraph>
          <Text color="primary" fontSize={1}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Maecenas sed diam eget risus varius
            blandit sit amet non magna.
          </Text>
        </Box>
      </Layout>
    )
  }
}

export default LayoutPage
