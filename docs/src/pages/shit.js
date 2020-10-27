import React, { Component } from 'react'
import { Layout, SEO, Sidebar } from '../components'
import {
  Box,
  Text,
  Paragraph,
  Heading,
  SideSheet,
  Button,
  ButtonIcon,
  IconBell,
  ListView,
  ListViewItem,
  Media,
  MediaItem,
  Combobox,
  TextInput,
  TextArea,
  Dialog,
  CornerDialog,
  InputGroup,
  InputGroupText,
  FormGroup,
} from '../../../src'

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

class SystemPage extends Component {
  constructor(props) {
    super(props)

    this.openCornerDialog = this.openCornerDialog.bind(this)
    this.openDialog = this.openDialog.bind(this)
    this.openSideSheet = this.openSideSheet.bind(this)
    this.closeSideSheet = this.closeSideSheet.bind(this)
    this.state = {
      isShown: false,
      isDialogShown: false,
      isCornerDialogShown: false,
    }
  }

  openDialog() {
    this.setState({ isDialogShown: true })
  }

  openCornerDialog() {
    this.setState({ isCornerDialogShown: true })
  }

  openSideSheet() {
    console.log('Open side sheet!')
    this.setState({
      isShown: true,
    })
  }

  handleListViewSelected = () => {
    console.log('Handling list view selection!')
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
          <Box mb={5}>
            <FormGroup>
              <InputGroup>
                <InputGroupText size="sm">Açıklama</InputGroupText>
                <TextInput type="text" size="sm" />
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <TextInput type="text" placeholder="Recipient's username" />
                <InputGroupText type="append">.muhsis.com</InputGroupText>
              </InputGroup>
            </FormGroup>

            <FormGroup>
              <InputGroup>
                <InputGroupText>$</InputGroupText>
                <TextInput type="text" placeholder="Recipient's username" />
                <InputGroupText type="append">.00</InputGroupText>
              </InputGroup>
            </FormGroup>
          </Box>

          <TextArea rows={5} placeholder="Hey, Ho!" mb={3} />
          <TextInput value="Shit" />
          <Combobox
            isMulti
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={true}
            name="color"
            options={colourOptions}
          />
        </Box>
        <Box p={3} ml={250}>
          <TextInput size="sm" value="Shit" />
          <Combobox
            size="sm"
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={true}
            name="color"
            options={colourOptions}
          />
        </Box>
        <Box p={3} ml={250}>
          <TextInput size="lg" value="Shit" />
          <Combobox
            size="lg"
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isSearchable={true}
            name="color"
            options={colourOptions}
          />
        </Box>
        <Box p={3} ml={250}>
          <ButtonIcon>
            <IconBell />
          </ButtonIcon>
        </Box>

        <Box p={3} ml={250}>
          <Button variant="success" onClick={this.openCornerDialog}>
            Open Corner Dialog
          </Button>

          <CornerDialog
            title="Welcome to this new feature"
            isShown={this.state.isCornerDialogShown}
            onCloseComplete={() =>
              this.setState({ isCornerDialogShown: false })
            }
          >
            The corner dialog component is used for new feature announcements
            and feedback requests from the user. Fusce dapibus, tellus ac cursus
            commodo, tortor mauris condimentum nibh, ut fermentum massa justo
            sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et. Donec sed odio dui. Donec id elit non mi porta
            gravida at eget metus. Cras mattis consectetur purus sit amet
            fermentum. Vestibulum id ligula porta felis euismod semper.
          </CornerDialog>
        </Box>

        <Box p={3} ml={250}>
          <Button variant="secondary" onClick={this.openDialog}>
            Open Dialog
          </Button>

          <Dialog
            isShown={this.state.isDialogShown}
            onCloseComplete={() => this.setState({ isDialogShown: false })}
            preventBodyScrolling
            header={({ close }) => (
              <>
                <Heading variant="h6" m={0} p={0}>
                  <IconBell mr={2} /> Custom Title
                </Heading>
                <Button size="sm" ml="auto" variant="dark" onClick={close}>
                  Close Me
                </Button>
              </>
            )}
            footer={({ close }) => (
              <>
                <Button variant="light" mr={1} onClick={close}>
                  Cancel Me!
                </Button>
                <Button>Take Action</Button>
              </>
            )}
          >
            {({ close }) => (
              <>
                <Paragraph m={0} mb={3}>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Integer posuere erat a
                  ante venenatis dapibus posuere velit aliquet. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Sed posuere consectetur est at lobortis. Donec
                  ullamcorper nulla non metus auctor fringilla. Duis mollis, est
                  non commodo luctus, nisi erat porttitor ligula, eget lacinia
                  odio sem nec elit. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                  eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                  vestibulum. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Donec sed odio dui. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Praesent commodo cursus magna,
                  vel scelerisque nisl consectetur et. Vestibulum id ligula
                  porta felis euismod semper. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec
                  ullamcorper nulla non metus auctor fringilla. Integer posuere
                  erat a ante venenatis dapibus posuere velit aliquet. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et.
                </Paragraph>
                <Paragraph m={0} mb={3}>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Integer posuere erat a
                  ante venenatis dapibus posuere velit aliquet. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Sed posuere consectetur est at lobortis. Donec
                  ullamcorper nulla non metus auctor fringilla. Duis mollis, est
                  non commodo luctus, nisi erat porttitor ligula, eget lacinia
                  odio sem nec elit. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                  eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                  vestibulum. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Donec sed odio dui. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Praesent commodo cursus magna,
                  vel scelerisque nisl consectetur et. Vestibulum id ligula
                  porta felis euismod semper. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec
                  ullamcorper nulla non metus auctor fringilla. Integer posuere
                  erat a ante venenatis dapibus posuere velit aliquet. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et.
                </Paragraph>
                <Paragraph m={0} mb={3}>
                  Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula, eget lacinia odio sem nec elit. Integer posuere erat a
                  ante venenatis dapibus posuere velit aliquet. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Sed posuere consectetur est at lobortis. Donec
                  ullamcorper nulla non metus auctor fringilla. Duis mollis, est
                  non commodo luctus, nisi erat porttitor ligula, eget lacinia
                  odio sem nec elit. Duis mollis, est non commodo luctus, nisi
                  erat porttitor ligula, eget lacinia odio sem nec elit. Aenean
                  eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                  vestibulum. Nullam id dolor id nibh ultricies vehicula ut id
                  elit. Donec sed odio dui. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Praesent commodo cursus magna,
                  vel scelerisque nisl consectetur et. Vestibulum id ligula
                  porta felis euismod semper. Aenean eu leo quam. Pellentesque
                  ornare sem lacinia quam venenatis vestibulum. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et. Donec
                  ullamcorper nulla non metus auctor fringilla. Integer posuere
                  erat a ante venenatis dapibus posuere velit aliquet. Etiam
                  porta sem malesuada magna mollis euismod. Praesent commodo
                  cursus magna, vel scelerisque nisl consectetur et.
                </Paragraph>
                <Box>
                  <Button block variant="warning" onClick={close}>
                    Close From Content
                  </Button>
                </Box>
              </>
            )}
          </Dialog>
        </Box>
        <Box p={3} ml={250}>
          <Button onClick={this.openSideSheet}>Show Side Sheet</Button>
          <SideSheet
            isShown={this.state.isShown}
            onCloseComplete={this.closeSideSheet}
          >
            <Paragraph m={3}>Basic Example</Paragraph>
            <Paragraph m={3}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed posuere consectetur
              est at lobortis. Donec ullamcorper nulla non metus auctor
              fringilla. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia
              quam venenatis vestibulum. Nullam id dolor id nibh ultricies
              vehicula ut id elit. Donec sed odio dui. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vestibulum id ligula porta
              felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
              lacinia quam venenatis vestibulum. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Donec ullamcorper nulla non
              metus auctor fringilla. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Etiam porta sem malesuada magna
              mollis euismod. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </Paragraph>
            <Paragraph m={3}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed posuere consectetur
              est at lobortis. Donec ullamcorper nulla non metus auctor
              fringilla. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia
              quam venenatis vestibulum. Nullam id dolor id nibh ultricies
              vehicula ut id elit. Donec sed odio dui. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vestibulum id ligula porta
              felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
              lacinia quam venenatis vestibulum. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Donec ullamcorper nulla non
              metus auctor fringilla. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Etiam porta sem malesuada magna
              mollis euismod. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </Paragraph>
            <Paragraph m={3}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed posuere consectetur
              est at lobortis. Donec ullamcorper nulla non metus auctor
              fringilla. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia
              quam venenatis vestibulum. Nullam id dolor id nibh ultricies
              vehicula ut id elit. Donec sed odio dui. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vestibulum id ligula porta
              felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
              lacinia quam venenatis vestibulum. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Donec ullamcorper nulla non
              metus auctor fringilla. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Etiam porta sem malesuada magna
              mollis euismod. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </Paragraph>
            <Paragraph m={3}>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Sed posuere consectetur
              est at lobortis. Donec ullamcorper nulla non metus auctor
              fringilla. Duis mollis, est non commodo luctus, nisi erat
              porttitor ligula, eget lacinia odio sem nec elit. Duis mollis, est
              non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
              sem nec elit. Aenean eu leo quam. Pellentesque ornare sem lacinia
              quam venenatis vestibulum. Nullam id dolor id nibh ultricies
              vehicula ut id elit. Donec sed odio dui. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Vestibulum id ligula porta
              felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem
              lacinia quam venenatis vestibulum. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur et. Donec ullamcorper nulla non
              metus auctor fringilla. Integer posuere erat a ante venenatis
              dapibus posuere velit aliquet. Etiam porta sem malesuada magna
              mollis euismod. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </Paragraph>
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
            <ListViewItem
              clickable
              handleSelected={this.handleListViewSelected}
            >
              Listview item.
            </ListViewItem>
            <ListViewItem clickable>Listview item.</ListViewItem>
          </ListView>
        </Box>
      </Layout>
    )
  }
}

export default SystemPage
