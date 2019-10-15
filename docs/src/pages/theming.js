import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import {
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
  NumberInput,
  InputGroup,
  InputGroupText,
  IconChevronDown,
  Combobox,
  theme,
  ButtonLink,
  IconMenu,
  IconTrash,
  IconSquaredPlus,
  IconPlus,
  Dropdown,
  Menu,
  MenuItem,
  MenuDivider,
  IconAircraft,
  IconAddress,
  IconLogOut,
  AutosizeNumberInput,
  IconText,
  IconArrowDown,
} from '../../../src'

const taxOptions = [
  { value: '1', label: '%18 KDV', color: '#00B8D9', isFixed: true },
  { value: '2', label: '%8 KDV', color: '#0052CC', disabled: true },
  { value: '3', label: '%1 KDV', color: '#5243AA' },
  { value: '4', label: "KDV'siz", color: '#FF5630', isFixed: true },
]

const ScHr = styled.hr`
  margin: 0.25rem 0;
  height: 0;
  visibility: hidden;
  width: 100%;
`

const ScLine = styled(Box)`
  margin-bottom: 0.5rem;
`

const ScLeftMenu = styled(Box)`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 100%;
  margin-right: 0.5rem;
  margin-top: 0.25rem;
  transition: opacity 0.25s;

  ${ScLine}:hover & {
    opacity: 1;
  }
`

const ScRightMenu = styled(Box)`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0rem;
  margin-top: 0rem;
  transition: opacity 0.25s;
  width: 80px;

  ${ScLine}:hover & {
    opacity: 1;
  }
`

const LineItemMenu = () => (
  <Dropdown
    width={170}
    content={
      <Menu size="sm">
        <MenuItem>
          <IconText mr={2} />
          Açıklama Ekle
        </MenuItem>
        <MenuDivider />
        <MenuItem variant="warning">
          <IconArrowDown mr={2} />
          İndirim Uygula
        </MenuItem>
        <MenuDivider />
        <MenuItem variant="secondary">
          <IconSquaredPlus mr={2} /> ÖTV Ekle
        </MenuItem>
        <MenuItem variant="secondary">
          <IconSquaredPlus mr={2} /> ÖİV Ekle
        </MenuItem>
      </Menu>
    }
  >
    <ButtonLink type="button" variant="primary">
      <IconSquaredPlus />
    </ButtonLink>
  </Dropdown>
)

class ThemingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      company: '',
      stock: '',
      price: '',
      unit: '',
      unitPrice: 0,
      totalPrice: 0,
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

            <Box my={4}>
              <ScLine
                display="flex"
                alignItems="flex-start"
                position="relative"
              >
                <Box flex="1" mr={2} pr={2}>
                  <ScLeftMenu>
                    <ButtonLink variant="light" type="button">
                      <IconMenu />
                    </ButtonLink>
                  </ScLeftMenu>

                  <AutosizeInput
                    value={this.state.stock}
                    onChange={this.updateInputValue.bind(this, 'stock')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    placeholder="Stok Adı"
                  />
                  <TextInput
                    type="text"
                    size="sm"
                    fontSize="0.75rem"
                    px={0}
                    mx={1}
                    mt={-2}
                    minimal
                    placeholder="Belgenin satırı ile ilgili açıklama buraya gelebilir"
                  />
                </Box>
                <Box mr={2}>
                  <AutosizeNumberInput
                    size="sm"
                    transparent
                    decimalScale={0}
                    allowNegative={false}
                    value={this.state.unit}
                    onChange={this.updateInputValue.bind(this, 'unit')}
                    mr={1}
                  />
                  <Text color="silver">adet</Text>
                </Box>
                <Box width={120} textAlign="right" mr={2}>
                  <AutosizeNumberInput
                    size="sm"
                    color="slate"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    allowNegative={false}
                    suffix={' ₺'}
                    decimalScale={2}
                    value={this.state.unitPrice}
                    onChange={this.updateInputValue.bind(this, 'unitPrice')}
                  />
                </Box>
                <Box width={95} mr={2}>
                  <Combobox
                    size="sm"
                    transparent
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isSearchable={true}
                    name="tax3"
                    options={taxOptions}
                    placeholder="KDV"
                  />
                </Box>

                <Box width={150} textAlign="right" mr={2}>
                  <AutosizeNumberInput
                    size="sm"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    allowNegative={false}
                    suffix={' ₺'}
                    decimalScale={2}
                    value={this.state.totalPrice}
                    onChange={this.updateInputValue.bind(this, 'totalPrice')}
                  />
                </Box>

                <Box pt={1}>
                  <LineItemMenu />
                </Box>

                <ScRightMenu pt={1}>
                  <ButtonLink type="button" variant="danger">
                    <IconTrash />
                  </ButtonLink>
                </ScRightMenu>
              </ScLine>

              <ScLine
                display="flex"
                alignItems="flex-start"
                position="relative"
              >
                <Box flex="1" mr={2}>
                  <ScLeftMenu>
                    <ButtonLink variant="light" type="button">
                      <IconMenu />
                    </ButtonLink>
                  </ScLeftMenu>

                  <AutosizeInput
                    value={this.state.stock}
                    onChange={this.updateInputValue.bind(this, 'stock')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    placeholder="Stok Adı"
                  />
                  <Text
                    display="block"
                    color="silver"
                    px={1}
                    fontSize="0.75rem"
                    mt={-1}
                  >
                    Belgenin satırı ile ilgili açıklama buraya gelebilir.
                  </Text>
                </Box>
                <Box mr={2}>
                  <AutosizeInput
                    value={this.state.company}
                    onChange={this.updateInputValue.bind(this, 'company')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    maxWidth={40}
                    textAlign="right"
                  />{' '}
                  <Text color="silver">adet</Text>
                </Box>
                <Box width={120} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="slate"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                  />
                </Box>
                <Box width={95} mr={2}>
                  <Combobox
                    size="sm"
                    transparent
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isSearchable={true}
                    name="tax3"
                    options={taxOptions}
                    placeholder="KDV"
                  />
                </Box>

                <Box width={150} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="dark"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                    value={12800}
                  />
                </Box>

                <Box>
                  <Dropdown
                    content={
                      <Menu size="lg">
                        <MenuItem>
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
                    <ButtonLink type="button" variant="primary">
                      <IconSquaredPlus />
                    </ButtonLink>
                  </Dropdown>
                </Box>

                <ScRightMenu>
                  <ButtonLink type="button" variant="danger">
                    <IconTrash />
                  </ButtonLink>
                </ScRightMenu>
              </ScLine>

              <ScLine
                display="flex"
                alignItems="flex-start"
                position="relative"
              >
                <Box flex="1" mr={2}>
                  <ScLeftMenu>
                    <ButtonLink variant="light" type="button">
                      <IconMenu />
                    </ButtonLink>
                  </ScLeftMenu>

                  <AutosizeInput
                    value={this.state.stock}
                    onChange={this.updateInputValue.bind(this, 'stock')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    placeholder="Stok Adı"
                  />
                  <Text
                    display="block"
                    color="silver"
                    px={1}
                    fontSize="0.75rem"
                    mt={-1}
                  >
                    Belgenin satırı ile ilgili açıklama buraya gelebilir.
                  </Text>
                </Box>
                <Box mr={2}>
                  <AutosizeInput
                    value={this.state.company}
                    onChange={this.updateInputValue.bind(this, 'company')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    maxWidth={40}
                    textAlign="right"
                  />{' '}
                  <Text color="silver">adet</Text>
                </Box>
                <Box width={120} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="slate"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                  />
                </Box>
                <Box width={95} mr={2}>
                  <Combobox
                    size="sm"
                    transparent
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isSearchable={true}
                    name="tax3"
                    options={taxOptions}
                    placeholder="KDV"
                  />
                </Box>

                <Box width={150} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="dark"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                    value={12800}
                  />
                </Box>

                <Box>
                  <Dropdown
                    content={
                      <Menu>
                        <MenuItem>
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
                    <ButtonLink type="button" variant="primary">
                      <IconSquaredPlus />
                    </ButtonLink>
                  </Dropdown>
                </Box>

                <ScRightMenu>
                  <ButtonLink type="button" variant="danger">
                    <IconTrash />
                  </ButtonLink>
                </ScRightMenu>
              </ScLine>

              <ScLine
                display="flex"
                alignItems="flex-start"
                position="relative"
              >
                <Box flex="1" mr={2}>
                  <ScLeftMenu>
                    <ButtonLink variant="light" type="button">
                      <IconMenu />
                    </ButtonLink>
                  </ScLeftMenu>

                  <AutosizeInput
                    value={this.state.stock}
                    onChange={this.updateInputValue.bind(this, 'stock')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    placeholder="Stok Adı"
                  />
                  <Text
                    display="block"
                    color="silver"
                    px={1}
                    fontSize="0.75rem"
                    mt={-1}
                  >
                    Belgenin satırı ile ilgili açıklama buraya gelebilir.
                  </Text>
                </Box>

                <Box mr={2}>
                  <AutosizeInput
                    value={this.state.company}
                    onChange={this.updateInputValue.bind(this, 'company')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    maxWidth={40}
                    textAlign="right"
                  />{' '}
                  <Text color="silver">adet</Text>
                </Box>

                <Box width={120} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="slate"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                  />
                </Box>
                <Box width={95} mr={2}>
                  <Combobox
                    size="sm"
                    transparent
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isSearchable={true}
                    name="tax3"
                    options={taxOptions}
                    placeholder="KDV"
                  />
                </Box>

                <Box width={150} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="dark"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                    value={12800}
                  />
                </Box>

                <Box>
                  <Dropdown
                    content={
                      <Menu>
                        <MenuItem>
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
                    <ButtonLink type="button" variant="primary">
                      <IconSquaredPlus />
                    </ButtonLink>
                  </Dropdown>
                </Box>

                <ScRightMenu>
                  <ButtonLink type="button" variant="danger">
                    <IconTrash />
                  </ButtonLink>
                </ScRightMenu>
              </ScLine>

              <ScLine
                display="flex"
                alignItems="flex-start"
                position="relative"
              >
                <Box flex="1" mr={2}>
                  <ScLeftMenu>
                    <ButtonLink variant="light" type="button">
                      <IconMenu />
                    </ButtonLink>
                  </ScLeftMenu>

                  <AutosizeInput
                    value={this.state.stock}
                    onChange={this.updateInputValue.bind(this, 'stock')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    placeholder="Stok Adı"
                  />
                  <Text
                    display="block"
                    color="silver"
                    px={1}
                    fontSize="0.75rem"
                    mt={-1}
                  >
                    Belgenin satırı ile ilgili açıklama buraya gelebilir.
                  </Text>

                  <Box mt={2} mb={2} width={140}>
                    <InputGroup>
                      <InputGroupText size="sm">
                        <Text fontSize="0.875rem" mx={2}>
                          Yüzde <IconChevronDown ml={1} />
                        </Text>
                      </InputGroupText>
                      <NumberInput
                        size="sm"
                        thousandSeparator={false}
                        prefix={'%'}
                        textAlign="center"
                        mr={1}
                        inline
                      />
                    </InputGroup>
                  </Box>
                </Box>

                <Box mr={2}>
                  <AutosizeInput
                    value={this.state.company}
                    onChange={this.updateInputValue.bind(this, 'company')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    maxWidth={40}
                    textAlign="right"
                  />{' '}
                  <Text color="silver">adet</Text>
                </Box>

                <Box width={120} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="slate"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                  />
                </Box>
                <Box width={95} mr={2}>
                  <Combobox
                    size="sm"
                    transparent
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isSearchable={true}
                    name="tax3"
                    options={taxOptions}
                    placeholder="KDV"
                  />
                </Box>
                <Box width={150} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="dark"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                    value={12800}
                  />
                </Box>

                <Box>
                  <Dropdown
                    content={
                      <Menu>
                        <MenuItem>
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
                    <ButtonLink type="button" variant="primary">
                      <IconSquaredPlus />
                    </ButtonLink>
                  </Dropdown>
                </Box>

                <ScRightMenu>
                  <ButtonLink type="button" variant="danger">
                    <IconTrash />
                  </ButtonLink>
                </ScRightMenu>
              </ScLine>

              <ScLine
                display="flex"
                alignItems="flex-start"
                position="relative"
              >
                <Box flex="1" mr={2}>
                  <ScLeftMenu>
                    <ButtonLink variant="light" type="button">
                      <IconMenu />
                    </ButtonLink>
                  </ScLeftMenu>

                  <AutosizeInput
                    value={this.state.stock}
                    onChange={this.updateInputValue.bind(this, 'stock')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    placeholder="Stok Adı"
                  />
                  <Text
                    display="block"
                    color="silver"
                    px={1}
                    fontSize="0.75rem"
                    mt={-1}
                  >
                    Belgenin satırı ile ilgili açıklama buraya gelebilir.
                  </Text>
                </Box>

                <Box mr={2}>
                  <AutosizeInput
                    value={this.state.company}
                    onChange={this.updateInputValue.bind(this, 'company')}
                    size="sm"
                    transparent
                    fontWeight={500}
                    maxWidth={40}
                    textAlign="right"
                  />{' '}
                  <Text color="silver">adet</Text>
                </Box>

                <Box width={120} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="slate"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                  />
                </Box>
                <Box width={95} mr={2}>
                  <Combobox
                    size="sm"
                    transparent
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isSearchable={true}
                    name="tax3"
                    options={taxOptions}
                    placeholder="KDV"
                  />
                </Box>

                <Box width={150} textAlign="right" mr={2}>
                  <NumberInput
                    size="sm"
                    color="dark"
                    fontWeight={600}
                    transparent
                    thousandSeparator={true}
                    suffix={' ₺'}
                    value={12800}
                  />
                </Box>

                <Box>
                  <Dropdown
                    content={
                      <Menu>
                        <MenuItem>
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
                    <ButtonLink type="button" variant="primary">
                      <IconSquaredPlus />
                    </ButtonLink>
                  </Dropdown>
                </Box>

                <ScRightMenu>
                  <ButtonLink type="button" variant="danger">
                    <IconTrash />
                  </ButtonLink>
                </ScRightMenu>
              </ScLine>
            </Box>

            <Box my={4} maxWidth={600}>
              <TextInput
                mb={2}
                type="text"
                size="sm"
                placeholder="Minimal input variant."
                minimal
              />

              <TextInput
                mb={2}
                type="text"
                placeholder="Minimal input variant."
                minimal
              />

              <TextInput
                mb={2}
                type="text"
                size="lg"
                placeholder="Minimal input variant."
                minimal
              />
            </Box>

            <Box my={4} maxWidth={250}>
              <Box mb={1}>
                <AutosizeInput
                  value={this.state.company}
                  onChange={this.updateInputValue.bind(this, 'company')}
                  size="sm"
                  transparent
                  placeholder="Firma Ünvanı"
                  fontSize="1rem"
                  fontWeight={500}
                />
              </Box>

              <Box mb={1}>
                <AutosizeNumberInput
                  thousandSeparator={true}
                  suffix={' ₺'}
                  size="sm"
                  transparent
                  placeholder="Fiyat"
                  value={this.state.price}
                  onChange={this.updateInputValue.bind(this, 'price')}
                  mr={1}
                />
              </Box>

              <AutosizeInput
                value={this.state.firstName}
                onChange={this.updateInputValue.bind(this, 'firstName')}
                size="sm"
                transparent
                placeholder="İsminiz"
                color="slate"
                mr={1}
              />

              <AutosizeInput
                value={this.state.lastName}
                onChange={this.updateInputValue.bind(this, 'lastName')}
                size="sm"
                transparent
                placeholder="Soyisminiz"
                color="slate"
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
                rows={2}
                transparent
                id="myArea"
                placeholder="Adres Bilgileri"
                size="sm"
                mt={2}
              />
            </Box>

            <Box my={4}>
              <Box mb={2}>
                <NumberInput
                  size="sm"
                  width={120}
                  color="secondary"
                  thousandSeparator={true}
                  suffix={' ₺'}
                  placeholder="Enter Money Value"
                  mr={1}
                  inline
                  value="2500"
                />
              </Box>
              <Box mb={2}>
                <NumberInput
                  size="sm"
                  width={120}
                  color="success"
                  fontWeight={600}
                  transparent
                  thousandSeparator={true}
                  suffix={' ₺'}
                  placeholder="Satış Tutarı"
                  mr={1}
                  inline
                />
              </Box>
              <Box mb={2}>
                <NumberInput
                  transparent
                  width={120}
                  size="sm"
                  thousandSeparator={true}
                  suffix={' ₺'}
                  placeholder="Toplam Tutar"
                  mr={1}
                  inline
                />
              </Box>

              <Box mb={2} maxWidth={140}>
                <FormGroup>
                  <InputGroup>
                    <InputGroupText size="sm">
                      <Text mx={2}>
                        Yüzde <IconChevronDown ml={1} />
                      </Text>
                    </InputGroupText>
                    <NumberInput
                      size="sm"
                      thousandSeparator={false}
                      prefix={'%'}
                      textAlign="center"
                      mr={1}
                      inline
                    />
                  </InputGroup>
                </FormGroup>
              </Box>

              <Box mb={2} maxWidth={180}>
                <FormGroup>
                  <InputGroup>
                    <InputGroupText size="sm">
                      <Text mx={2}>
                        Tutar <IconChevronDown ml={1} />
                      </Text>
                    </InputGroupText>
                    <NumberInput
                      size="sm"
                      thousandSeparator={true}
                      suffix={' ₺'}
                      mr={1}
                      inline
                    />
                  </InputGroup>
                </FormGroup>
              </Box>
            </Box>

            <Box my={4}>
              <DatePicker />
            </Box>

            <Box my={4}>
              <DatePicker
                dateFormat="DD/MM/YYYY"
                timeFormat={false}
                value={new Date()}
                color="primary"
                fontWeight={500}
              />
            </Box>

            <Box my={4}>
              <DatePicker
                dateFormat="DD/MM/YYYY"
                timeFormat={false}
                placeholder="Vade Tarihi"
                size="sm"
                width={85}
                textAlign="center"
                fontWeight={500}
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
