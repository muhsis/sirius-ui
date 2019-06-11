import React, { Component } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import {
  Heading,
  Paragraph,
  Code,
  Toaster,
  theme,
  Box,
  DataTable,
  NumberInput,
  TextInput,
  Button,
  DatePicker,
  Tab,
  TabGroup,
  Pagination,
  Progress,
  Timeline,
  TimelineItem,
  ListView,
  ListViewItem,
  ButtonIcon,
  IconCheck,
  IconTextDocument,
  IconAircraft,
  Media,
  MediaItem,
  IconDotsThreeHorizontal,
  Dropdown,
  Menu,
  MenuItem,
  MenuDivider,
  IconAddress,
  IconLogOut,
  Text,
} from '../../../src'
console.log('DT', DataTable)

const toaster = new Toaster(theme)

const ScLink = styled(Link)``

class IndexPage extends Component {
  itemSelected = () => {
    console.log('item selected!')
  }

  paginationOnChange = value => {
    toaster.info(
      'Hello world!',
      'Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    )
    console.log('Pager changed', value, toaster)
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Sidebar />
        <Container>
          <Content>
            <Heading>Muhsis UI</Heading>
            <Paragraph>
              Muhsis UI is a design system and ui <Code>inline</Code> library
              developed with <a href="#">Styled Components 💅</a> and{' '}
              <a href="#">Styled System</a>.
            </Paragraph>

            <Box mt={4}>
              <ListView>
                <ListViewItem
                  actions={
                    <ButtonIcon type="button">
                      <IconDotsThreeHorizontal />
                    </ButtonIcon>
                  }
                >
                  This item does not have click event handler.
                </ListViewItem>

                <ListViewItem
                  clickable
                  handleSelected={this.itemSelected}
                  actions={
                    <ButtonIcon type="button">
                      <IconDotsThreeHorizontal />
                    </ButtonIcon>
                  }
                >
                  This item have click event handler.
                </ListViewItem>

                <ListViewItem
                  clickable
                  handleSelected={this.itemSelected}
                  showcase={
                    <Text color="primary" fontSize="2rem">
                      <IconAircraft />
                    </Text>
                  }
                  actions={
                    <Dropdown
                      content={
                        <Menu>
                          <MenuItem as="a" href="#" target="_blank">
                            <IconAddress mr={3} />
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
                      <ButtonIcon type="button">
                        <IconDotsThreeHorizontal />
                      </ButtonIcon>
                    </Dropdown>
                  }
                >
                  This item also have click event handler, also a dropdown
                  element and an icon.
                </ListViewItem>
              </ListView>
            </Box>

            <Box mt={4}>
              <Progress percentage={10} mb={2} />
              <Progress percentage={20} mb={2} variant="secondary" />
              <Progress percentage={30} mb={2} variant="success" />
              <Progress percentage={40} mb={2} variant="warning" />
              <Progress percentage={50} mb={2} variant="danger" />
              <Progress percentage={60} mb={2} variant="info" />
              <Progress percentage={70} mb={2} variant="light" />
              <Progress percentage={80} mb={2} variant="dark" />
            </Box>

            <Box mt={4}>
              <Timeline>
                <TimelineItem>
                  Aenean lacinia bibendum nulla sed consectetur.
                </TimelineItem>

                <TimelineItem variant="secondary">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                </TimelineItem>

                <TimelineItem variant="success">
                  Maecenas faucibus mollis interdum.
                </TimelineItem>

                <TimelineItem variant="secondary" icon={<IconTextDocument />}>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Morbi leo risus, porta ac consectetur
                  ac, vestibulum at eros. Sed posuere consectetur est at
                  lobortis. Cras mattis consectetur purus sit amet fermentum.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.Aenean eu leo quam. Pellentesque ornare
                  sem lacinia quam venenatis vestibulum. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros. Sed posuere consectetur
                  est at lobortis. Cras mattis consectetur purus sit amet
                  fermentum. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </TimelineItem>

                <TimelineItem variant="dark">
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Morbi leo risus, porta ac consectetur
                  ac, vestibulum at eros. Sed posuere consectetur est at
                  lobortis. Cras mattis consectetur purus sit amet fermentum.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </TimelineItem>

                <TimelineItem variant="warning" icon={<IconCheck />}>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Morbi leo risus, porta ac consectetur
                  ac, vestibulum at eros. Sed posuere consectetur est at
                  lobortis. Cras mattis consectetur purus sit amet fermentum.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.Aenean eu leo quam. Pellentesque ornare
                  sem lacinia quam venenatis vestibulum. Morbi leo risus, porta
                  ac consectetur ac, vestibulum at eros. Sed posuere consectetur
                  est at lobortis. Cras mattis consectetur purus sit amet
                  fermentum. Cum sociis natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus.
                </TimelineItem>

                <TimelineItem variant="light" icon={<IconAircraft />}>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Morbi leo risus, porta ac consectetur
                  ac, vestibulum at eros. Sed posuere consectetur est at
                  lobortis. Cras mattis consectetur purus sit amet fermentum.
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus.
                </TimelineItem>
              </Timeline>
            </Box>

            <Box mt={4}>
              <Pagination
                pageSize={5}
                total={223}
                currentPage={1}
                onChange={this.paginationOnChange}
              />
            </Box>

            <Box mt={4}>
              <TabGroup>
                <Tab label="First Tab">First Tab Content</Tab>
                <Tab label="Second">Second Tab Content</Tab>
                <Tab label="Third">Third Tab Content</Tab>
              </TabGroup>
            </Box>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
