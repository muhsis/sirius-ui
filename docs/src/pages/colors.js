import React from 'react'
import { Layout, SEO, Sidebar, Container, Content } from '../components'
import { Heading, Paragraph, Grid, Cell, Box, styled } from '../../../src'
import * as colors from '../../../src/theming/color'
console.log('Colors', colors)

const ScColorBox = styled.div`
  background-color: ${p => p.bg};
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  border-top: 1px solid #ebebeb;
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  height: 125px;
`

const ScColorDescription = styled.div`
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  border: 1px solid #ebebeb;
  border-top: none;
  padding: 1rem;
  text-align: center;

  & > strong {
    display: block;
    font-size: 1rem;
    font-weight: 500;
  }

  & > span {
    color: ${colors.grays.silver};
    font-size: 0.875rem;
  }
`

const ColorsPage = () => (
  <Layout>
    <SEO title="Colors" keywords={[`gatsby`, `application`, `react`]} />
    <Sidebar />
    <Container>
      <Content>
        <Heading variant="h2">Colors</Heading>
        <p>
          The color system for a product has many requirements and constraints.
          There is a need to be intentional and functional with color use. You
          can override every color you see below with theming (or add new ones).
        </p>

        <Box mt={4} mb={3}>
          <Heading variant="h4" mb={3}>
            Brand Colors
          </Heading>
          <Grid columns={4}>
            {Object.keys(colors.brand).map(key => {
              return (
                <Cell key={key} width={1}>
                  <ScColorBox bg={colors.brand[key]} />
                  <ScColorDescription>
                    <strong>{key}</strong>
                    <span>{colors.brand[key]}</span>
                  </ScColorDescription>
                </Cell>
              )
            })}
          </Grid>
        </Box>

        <Box mt={4} mb={3}>
          <Heading variant="h4" mb={3}>
            Grayscale
          </Heading>
          <Grid columns={4}>
            {Object.keys(colors.grays).map(key => {
              return (
                <Cell key={key} width={1}>
                  <ScColorBox bg={colors.grays[key]} />
                  <ScColorDescription>
                    <strong>{key}</strong>
                    <span>{colors.grays[key]}</span>
                  </ScColorDescription>
                </Cell>
              )
            })}
          </Grid>
        </Box>

        <Box mt={4} mb={3}>
          <Heading variant="h4" mb={3}>
            Tint Colors
          </Heading>
          <Grid columns={4}>
            {Object.keys(colors.tints).map(key => {
              return (
                <Cell key={key} width={1}>
                  <ScColorBox bg={colors.tints[key]} />
                  <ScColorDescription>
                    <strong>{key}</strong>
                    <span>{colors.tints[key]}</span>
                  </ScColorDescription>
                </Cell>
              )
            })}
          </Grid>
        </Box>
      </Content>
    </Container>
  </Layout>
)

export default ColorsPage
