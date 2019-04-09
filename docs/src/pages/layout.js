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
          <Dropdown>
            <Button onClick={this.handleOpenCloseDropdown}>
              Dropdown <IconChevronDown />
            </Button>
            <DropdownContent minWidth={200} isOpen={this.state.dropdownOpen}>
              <Menu>
                <MenuItem>
                  <IconAddress mr={2} />
                  Sample Menu Item
                </MenuItem>
                <MenuItem onClick={this.handleOpenCloseDropdown}>
                  <IconChat mr={2} />
                  Sample Menu Item
                </MenuItem>
                <MenuItem>
                  <IconUser mr={2} />
                  Sample Menu Item
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                  <IconAircraft mr={2} />
                  Sample Menu Item
                </MenuItem>
                <MenuItem>
                  <IconLogOut mr={2} /> Çıkış Yap
                </MenuItem>
              </Menu>
            </DropdownContent>
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

        <Box p={3} ml={250} textAlign="right">
          <Dropdown>
            <Button onClick={this.handleOpenCloseDropdown}>Dropdown</Button>
            <DropdownContent
              align="right"
              minWidth={200}
              isOpen={this.state.dropdownOpen}
            >
              Dropdown content will go here...
            </DropdownContent>
          </Dropdown>
        </Box>
      </Layout>
    )
  }
}

export default LayoutPage
