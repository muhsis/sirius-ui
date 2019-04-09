import React, { Component } from 'react'
import { Layout, SEO, Sidebar } from '../components'
import {
  Box,
  Text,
  Paragraph,
  SideSheet,
  Button,
  ButtonIcon,
  IconBell,
  ListView,
  ListViewItem,
  Media,
  MediaItem,
} from '../../../src'

class SystemPage extends Component {
  constructor(props) {
    super(props)

    this.openSideSheet = this.openSideSheet.bind(this)
    this.closeSideSheet = this.closeSideSheet.bind(this)
    this.state = {
      isShown: false,
    }
  }

  openSideSheet() {
    console.log('Open side sheet!')
    this.setState({
      isShown: true,
    })
  }

  closeSideSheet() {
    this.setState({
      isShown: false,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Sidebar />
        <Box p={3} ml={250}>
          <ButtonIcon>
            <IconBell />
          </ButtonIcon>
        </Box>
        <Box p={3} ml={250}>
          <Button onClick={this.openSideSheet}>Show Side Sheet</Button>
          <SideSheet
            isShown={this.state.isShown}
            onCloseComplete={this.closeSideSheet}
          >
            <Paragraph m={3}>Basic Example</Paragraph>
          </SideSheet>
        </Box>
        <Box p={3} ml={250}>
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

          <ListView mt={4}>
            <ListViewItem>
              <Media>
                <MediaItem mr={2}>Icon</MediaItem>
                <MediaItem flex="1" bg="red" px={3}>
                  Item content.
                </MediaItem>
                <MediaItem ml={2}>Menu</MediaItem>
              </Media>
            </ListViewItem>
            <ListViewItem>Listview item.</ListViewItem>
            <ListViewItem>Listview item.</ListViewItem>
          </ListView>
        </Box>
      </Layout>
    )
  }
}

export default SystemPage
