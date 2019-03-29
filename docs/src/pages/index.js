import React from 'react'
import PropTypes from 'prop-types'
import { Container, Content, Layout, SEO, Sidebar } from '../components'
import {
  Avatar,
  AvatarInitials,
  Badge,
  Button,
  Carousel,
  Code,
  Pill,
  Box,
  Heading,
  Text,
  Table,
  TableCaption,
  TableHead,
  TableBody,
  TableCell,
  TableHeaderCell,
  TableRow,
  Paragraph,
  Grid,
  Cell,
  styled,
  LinearProgress,
  CircularProgress,
} from '../../../src'

import {
  IconAir,
  IconAircraft,
  IconCheck,
  IconTrash,
  IconTag,
  IconUser,
  IconExport,
  IconAddress,
  IconArrowLongRight,
  IconBox,
} from '../../../src'

const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 100px 50px;
  color: white;
  width: 100%;
`

function CarouselItem(props) {
  return (
    <Item>
      Item {props.index} of {props.numSlides}
    </Item>
  )
}

CarouselItem.propTypes = {
  index: PropTypes.number,
  numSlides: PropTypes.number,
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Sidebar />
    <Container>
      <Content>
        <Heading>
          <IconBox color="warning" mr={2} /> Muhsis UI
        </Heading>
        <Paragraph>
          <IconAir color="secondary" mr={2} />
          Muhsis UI is a design system and ui <Code>inline</Code> library
          developed with <a href="#">Styled Components 💅</a> and{' '}
          <a href="#">Styled System</a>.
        </Paragraph>

        <Box
          my={3}
          p={3}
          border="1px solid"
          borderColor="silver"
          borderRadius="0.25rem"
        >
          <Box mb={3}>
            <Button mr={1}>Primary</Button>
            <Button mr={1} variant="secondary">
              Secondary
            </Button>
            <Button mr={1} variant="success">
              Success
            </Button>
            <Button mr={1} variant="info">
              Info
            </Button>
            <Button mr={1} variant="warning">
              Warning
            </Button>
            <Button mr={1} variant="danger">
              <IconTrash mr={2} />
              Danger
            </Button>
            <Button mr={1} variant="light">
              <IconExport mr={1} />
              Light
            </Button>
            <Button mr={1} variant="dark">
              <IconAddress mr={1} />
              Dark
            </Button>
          </Box>

          <Box mb={3}>
            <Button size="sm" mr={1}>
              <IconCheck /> Primary
            </Button>
            <Button size="sm" mr={1} variant="secondary">
              <IconTag mr={1} />
              Secondary
            </Button>
            <Button size="sm" mr={1} variant="success">
              Success
            </Button>
            <Button size="sm" mr={1} variant="info">
              <IconUser mr={1} />
              Info
            </Button>
            <Button size="sm" mr={1} variant="warning">
              Warning
            </Button>
            <Button size="sm" mr={1} variant="danger">
              <IconTrash mr={1} />
              Danger
            </Button>
            <Button size="sm" mr={1} variant="light">
              Light
            </Button>
            <Button size="sm" mr={1} variant="dark">
              Dark
            </Button>
          </Box>

          <Box>
            <Button size="lg" mr={2}>
              <IconCheck color="snow" mr={2} /> Large Button
            </Button>
            <Button size="lg" variant="success">
              Large Button
              <IconArrowLongRight ml={2} />
            </Button>
          </Box>
        </Box>

        <Box
          my={3}
          p={3}
          border="1px solid"
          borderColor="silver"
          borderRadius="0.25rem"
        >
          <Box mr={1}>
            <LinearProgress mb={1} percent={23} />
            <LinearProgress mb={1} percent={24} variant="success" />
            <LinearProgress mb={1} percent={25} variant="info" />
            <LinearProgress
              mb={1}
              percent={26}
              variant="warning"
              striped={true}
            />
            <LinearProgress mb={1} percent={70} variant="danger" />
            <LinearProgress mb={1} size="sm" percent={70} variant="danger" />
            <LinearProgress
              mb={1}
              size="sm"
              percent={70}
              variant="danger"
              striped={true}
            />
            <LinearProgress mb={1} percent={28} variant="light" />
            <LinearProgress percent={29} variant="dark" />
          </Box>
        </Box>

        <Box
          my={3}
          p={3}
          border="1px solid"
          borderColor="silver"
          borderRadius="0.25rem"
        >
          <Box mr={1}>
            <CircularProgress mb={1} percent={10} radius={60} stroke={10} />
            <CircularProgress
              mb={1}
              percent={25}
              variant="success"
              radius={60}
              stroke={4}
            />
            <CircularProgress
              mb={1}
              percent={40}
              variant="info"
              radius={60}
              stroke={4}
            />
            <CircularProgress
              mb={1}
              percent={55}
              variant="warning"
              radius={60}
              stroke={12}
            />
            <CircularProgress
              mb={1}
              percent={70}
              variant="danger"
              radius={60}
              stroke={4}
            />
            <CircularProgress
              mb={1}
              radius={60}
              stroke={10}
              percent={85}
              variant="light"
            />
            <CircularProgress
              radius={60}
              stroke={4}
              percent={100}
              variant="dark"
            />
            <CircularProgress
              radius={100}
              stroke={8}
              percent={100}
              variant="dark"
            />
          </Box>
        </Box>

        <Box
          my={3}
          p={3}
          border="1px solid"
          borderColor="silver"
          borderRadius="0.25rem"
        >
          <Grid columns={3}>
            <Cell p={3} width={1} bg="snow">
              Cell Value
            </Cell>
            <Cell p={3} width={2} bg="snow">
              Cell Value
            </Cell>
            <Cell p={3} width={3} bg="success" color="snow">
              Cell Value
            </Cell>
            <Cell p={3} width={2} bg="snow">
              Cell Value
            </Cell>
            <Cell p={3} width={1} bg="snow">
              Cell Value
            </Cell>
          </Grid>
        </Box>

        <Box
          my={3}
          p={3}
          border="1px solid"
          borderColor="silver"
          borderRadius="0.25rem"
        >
          <Box mb={3}>
            <Badge mr={1}>Primary</Badge>
            <Badge mr={1} variant="secondary">
              Secondary
            </Badge>
            <Badge mr={1} variant="success">
              Success
            </Badge>
            <Badge mr={1} variant="info">
              Info
            </Badge>
            <Badge mr={1} variant="warning">
              Warning
            </Badge>
            <Badge mr={1} variant="danger">
              Danger
            </Badge>
            <Badge mr={1} variant="light">
              Light
            </Badge>
            <Badge mr={1} variant="dark">
              Dark
            </Badge>
          </Box>

          <Box>
            <Pill mr={1}>1</Pill>
            <Pill mr={1} variant="secondary">
              2
            </Pill>
            <Pill mr={1} variant="success">
              3
            </Pill>
            <Pill mr={1} variant="info">
              4
            </Pill>
            <Pill mr={1} variant="warning">
              5
            </Pill>
            <Pill mr={1} variant="danger">
              6
            </Pill>
            <Pill mr={1} variant="light">
              7
            </Pill>
            <Pill mr={1} variant="dark">
              8
            </Pill>
          </Box>
        </Box>

        <Box my={3}>
          <Table>
            <TableCaption>Long Table Caption Title</TableCaption>
            <TableHead>
              <TableRow>
                <TableHeaderCell />
                <TableHeaderCell>Chars</TableHeaderCell>
                <TableHeaderCell>Popularity</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableHeaderCell>Foo</TableHeaderCell>
                <TableCell textAlign="center">3</TableCell>
                <TableCell>0.7</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Bar</TableHeaderCell>
                <TableCell>49</TableCell>
                <TableCell color="red">0.89</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Foo</TableHeaderCell>
                <TableCell color={'green'}>3</TableCell>
                <TableCell color={'blue'}>0.7</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Bar</TableHeaderCell>
                <TableCell>49</TableCell>
                <TableCell>0.89</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell color="info">Foo</TableHeaderCell>
                <TableCell>3</TableCell>
                <TableCell>0.7</TableCell>
              </TableRow>
              <TableRow>
                <TableHeaderCell>Bar</TableHeaderCell>
                <TableCell>49</TableCell>
                <TableCell>0.89</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>

        <Box p={3} bg="smoke">
          <Avatar
            size="xs"
            mr={1}
            src="https://randomuser.me/api/portraits/women/95.jpg"
          />
          <Avatar
            size="sm"
            mr={1}
            src="https://randomuser.me/api/portraits/women/95.jpg"
          />
          <Avatar
            mr={1}
            src="https://randomuser.me/api/portraits/women/95.jpg"
          />
          <Avatar
            size="lg"
            mr={1}
            src="https://randomuser.me/api/portraits/women/95.jpg"
          />
          <Avatar
            size="xl"
            src="https://randomuser.me/api/portraits/women/95.jpg"
          />
        </Box>

        <Box p={3} mb={3} mt={3} bg="snow">
          <AvatarInitials size="xs" initials="EZ" mr={1} />
          <AvatarInitials size="sm" initials="ÖB" mr={1} />
          <AvatarInitials mr={1} />
          <AvatarInitials size="lg" mr={1} />
          <AvatarInitials size="xl" />
        </Box>

        <Box p={3} mb={3} bg="snow">
          <AvatarInitials size="sm" mr={1} variant="primary" />
          <AvatarInitials size="sm" mr={1} variant="secondary" />
          <AvatarInitials size="sm" mr={1} variant="success" />
          <AvatarInitials size="sm" mr={1} variant="info" />
          <AvatarInitials size="sm" mr={1} variant="warning" />
          <AvatarInitials size="sm" mr={1} variant="danger" />
          <AvatarInitials size="sm" mr={1} variant="light" />
          <AvatarInitials size="sm" variant="dark" />
        </Box>

        <Box>
          <Carousel>
            <CarouselItem index={1} />
            <CarouselItem index={2} />
            <CarouselItem index={3} />
          </Carousel>
        </Box>
      </Content>
    </Container>
  </Layout>
)

export default IndexPage
