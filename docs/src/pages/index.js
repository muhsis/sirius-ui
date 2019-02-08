import React from 'react'

import { Layout } from '../components/layout'
import SEO from '../components/seo'
import { Box, Text, Paragraph, boxiconsRegular } from '../../../src'
const { CodeBlock } = boxiconsRegular

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Box
      border="1px solid"
      borderColor="primary"
      borderRadius=".5rem"
      p={3}
      mx={3}
    >
      <Paragraph>
        <CodeBlock size="30" />
        Maecenas faucibus mollis interdum. Curabitur blandit tempus porttitor.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur
        blandit tempus porttitor. Vestibulum id ligula porta felis euismod
        semper.
      </Paragraph>
      <Text color="primary" fontSize={1}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Maecenas sed diam eget risus varius blandit
        sit amet non magna.
      </Text>
    </Box>
  </Layout>
)

export default IndexPage
