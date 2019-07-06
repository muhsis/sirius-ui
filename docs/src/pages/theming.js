import React, { Component } from 'react'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import {
  styled,
  Box,
  Heading,
  Paragraph,
  DatePicker,
  TextInput,
  FormGroup,
  FormLabel,
  FormHint,
  Popover,
  Button,
  Text,
  AutosizeInput,
  TextArea,
} from '../../../src'

const ScHr = styled.hr`
  margin: 0.25rem 0;
  height: 0;
  visibility: hidden;
  width: 100%;
`

class ThemingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
    }
  }

  updateInputValue = (input, event) => {
    const newState = {}
    newState[input] = event.target.value
    this.setState(newState)
  }

  render() {
    return (
      <Layout>
        <SEO title="Theming" keywords={[`gatsby`, `application`, `react`]} />
        <Sidebar />
        <Container>
          <Content>
            <Heading>Theming</Heading>
            <Paragraph>
              Will give detailed information on theming here.
            </Paragraph>

            <Box my={4} maxWidth={250}>
              <AutosizeInput
                autoFocus
                value={this.state.value1}
                onChange={this.updateInputValue.bind(this, 'value1')}
                size="sm"
                transparent
                placeholder="İsminiz"
                mr={1}
              />

              <AutosizeInput
                value={this.state.value2}
                onChange={this.updateInputValue.bind(this, 'value2')}
                size="sm"
                transparent
                placeholder="Soyisminiz"
                mr={1}
              />

              <DatePicker
                dateFormat="DD/MM/YYYY"
                timeFormat={false}
                placeholder="Vade Tarihi"
                size="sm"
                width={85}
                transparent
              />

              <TextArea
                autoResize
                rows={1}
                transparent
                id="myArea"
                placeholder="Adres Bilgileri"
                size="sm"
                mt={2}
              />
            </Box>

            <Box my={4}>
              <DatePicker />
            </Box>

            <Box my={4}>
              <DatePicker
                dateFormat="DD/MM/YYYY"
                timeFormat={false}
                value={new Date()}
              />
            </Box>

            <Box my={4}>
              <DatePicker
                dateFormat="DD/MM/YYYY"
                timeFormat={false}
                placeholder="Vade Tarihi"
                size="sm"
                width={85}
                transparent
              />
            </Box>

            <Box my={4}>
              <Popover
                mr={2}
                content={({ close }) => (
                  <Box p={4} textAlign="center">
                    <Text display="block" mb={2} color="slate">
                      Popover Content!
                    </Text>
                    <Button
                      type="button"
                      size="sm"
                      variant="light"
                      onClick={close}
                    >
                      Close Popover!
                    </Button>
                  </Box>
                )}
              >
                <Button type="button">Default Popover</Button>
              </Popover>

              <Popover
                mr={2}
                placement="right-top"
                content={({ close }) => (
                  <Box p={4} textAlign="center">
                    <Text display="block" mb={2} color="slate">
                      Popover Content!
                    </Text>
                    <Button
                      type="button"
                      size="sm"
                      variant="light"
                      onClick={close}
                    >
                      Close Popover!
                    </Button>
                  </Box>
                )}
              >
                <Button type="button">Right Top Popover</Button>
              </Popover>

              <Popover
                mr={2}
                placement="right-bottom"
                content={({ close }) => (
                  <Box p={4} textAlign="center">
                    <Text display="block" mb={2} color="slate">
                      Popover Content!
                    </Text>
                    <Button
                      type="button"
                      size="sm"
                      variant="light"
                      onClick={close}
                    >
                      Close Popover!
                    </Button>
                  </Box>
                )}
              >
                <Button type="button">Right Bottom Popover</Button>
              </Popover>

              <Popover
                mr={2}
                placement="left-bottom"
                content={({ close }) => (
                  <Box p={4} textAlign="center">
                    <Text display="block" mb={2} color="slate">
                      Popover Content!
                    </Text>
                    <Button
                      type="button"
                      size="sm"
                      variant="light"
                      onClick={close}
                    >
                      Close Popover!
                    </Button>
                  </Box>
                )}
              >
                <Button type="button">Left Bottom Popover</Button>
              </Popover>

              <Popover
                mr={2}
                placement="left-top"
                content={({ close }) => (
                  <Box p={4} textAlign="center">
                    <Text display="block" mb={2} color="slate">
                      Popover Content!
                    </Text>
                    <Button
                      type="button"
                      size="sm"
                      variant="light"
                      onClick={close}
                    >
                      Close Popover!
                    </Button>
                  </Box>
                )}
              >
                <Button type="button">Left Top Popover</Button>
              </Popover>

              <Popover
                mr={2}
                mt={2}
                placement="bottom-right"
                content={({ close }) => (
                  <Box p={4} textAlign="center">
                    <Text display="block" mb={2} color="slate">
                      Popover Content!
                    </Text>
                    <Button
                      type="button"
                      size="sm"
                      variant="light"
                      onClick={close}
                    >
                      Close Popover!
                    </Button>
                  </Box>
                )}
              >
                <Button type="button">Bottom Right Popover</Button>
              </Popover>

              <Popover
                mr={2}
                mt={2}
                placement="top-left"
                content={({ close }) => (
                  <Box p={4} textAlign="center">
                    <Text display="block" mb={2} color="slate">
                      Popover Content!
                    </Text>
                    <Button
                      type="button"
                      size="sm"
                      variant="light"
                      onClick={close}
                    >
                      Close Popover!
                    </Button>
                  </Box>
                )}
              >
                <Button type="button">Top Left Popover</Button>
              </Popover>

              <Popover
                mr={2}
                mt={2}
                placement="top-right"
                content={({ close }) => (
                  <Box p={4} textAlign="center">
                    <Text display="block" mb={2} color="slate">
                      Popover Content!
                    </Text>
                    <Button
                      type="button"
                      size="sm"
                      variant="light"
                      onClick={close}
                    >
                      Close Popover!
                    </Button>
                  </Box>
                )}
              >
                <Button type="button">Top Right Popover</Button>
              </Popover>
            </Box>

            <Box mt={5} bg="snow" p={3} display="flex" flexWrap="wrap">
              <Box mr={2} flex={1}>
                <FormGroup>
                  <FormLabel>İsminiz</FormLabel>
                  <TextInput type="text" name="name1" placeholder="İsminiz" />
                </FormGroup>
              </Box>
              <Box mr={2} flex={2}>
                <FormGroup>
                  <FormLabel>Soyisminiz</FormLabel>
                  <TextInput
                    type="text"
                    name="name2"
                    placeholder="Placeholder Text Will Go Here"
                  />
                  <FormHint>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Explicabo voluptate natus iusto magnam minus cumque adipisci
                    repellendus non nesciunt perspiciatis amet, accusamus
                    voluptatibus incidunt aspernatur omnis? Accusantium minima
                    rem repudiandae?
                  </FormHint>
                </FormGroup>
              </Box>
              <Box mr={2} flex={1}>
                <FormGroup>
                  <FormLabel>Small One</FormLabel>
                  <TextInput
                    type="text"
                    name="name2"
                    placeholder="Placeholder Text Will Go Here"
                  />
                </FormGroup>
              </Box>
              <Box mr={2} flex={1}>
                <FormGroup>
                  <FormLabel>Date One</FormLabel>
                  <DatePicker
                    dateFormat="DD/MM/YYYY"
                    timeFormat={false}
                    value={new Date()}
                  />
                </FormGroup>
              </Box>

              <ScHr />

              <Box mr={2} flex={1}>
                <Box mr={2} flex={2}>
                  <FormGroup>
                    <FormLabel>Field</FormLabel>
                    <TextInput
                      type="text"
                      name="name2"
                      placeholder="Placeholder Text Will Go Here"
                    />
                  </FormGroup>
                </Box>
              </Box>

              <Box mr={2} flex={1}>
                <FormGroup>
                  <FormLabel>Field</FormLabel>
                  <TextInput
                    type="text"
                    name="name2"
                    placeholder="Placeholder Text Will Go Here"
                  />
                </FormGroup>
              </Box>

              <ScHr />

              <Box mr={2} flex={1}>
                <FormGroup>
                  <FormLabel>Field</FormLabel>
                  <TextInput
                    type="text"
                    name="name2"
                    placeholder="Placeholder Text Will Go Here"
                  />
                </FormGroup>
              </Box>
              <Box mr={2} flex={1}>
                <FormGroup>
                  <FormLabel>Field</FormLabel>
                  <TextInput
                    type="text"
                    name="name2"
                    placeholder="Placeholder Text Will Go Here"
                  />
                </FormGroup>
              </Box>
              <Box mr={2} flex={1}>
                <FormGroup>
                  <FormLabel>Field</FormLabel>
                  <TextInput
                    type="text"
                    name="name2"
                    placeholder="Placeholder Text Will Go Here"
                  />
                </FormGroup>
              </Box>
              <Box mr={2} flex={1}>
                <FormGroup>
                  <FormLabel>Field</FormLabel>
                  <TextInput
                    type="text"
                    name="name2"
                    placeholder="Placeholder Text Will Go Here"
                  />
                </FormGroup>
              </Box>
            </Box>
          </Content>
        </Container>
      </Layout>
    )
  }
}

export default ThemingPage
