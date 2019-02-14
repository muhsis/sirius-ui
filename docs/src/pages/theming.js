import React from 'react'
import { Layout, SEO, Sidebar } from '../components'
import { Box, Text, Paragraph, boxiconsRegular } from '../../../src'

const ThemingPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Sidebar />
    <Box p={3} ml={250}>
      <Paragraph>
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

export default ThemingPage
