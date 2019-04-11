import React from 'react'
import {
  Container,
  Content,
  Layout,
  SEO,
  Sidebar,
  Playground,
} from '../components'
import {
  Box,
  Heading,
  Pre,
  Text,
  Strong,
  Paragraph,
  Code,
  UnorderedList,
  ListItem,
  Link,
} from '../../../src'

// Examples
import headingCodeText from '../examples/heading.example'
import paragraphCodeText from '../examples/paragraph.example'
import textCodeText from '../examples/text.example'
import linkCodeText from '../examples/link.example'

// Scopes
const headingScope = { Box, Heading }
const paragraphScope = { Box, Paragraph }
const textScope = { Box, Text, Paragraph }
const linkScope = { Box, Link, Paragraph, Code }

const TypographyPage = () => (
  <Layout>
    <SEO title="Typography" keywords={[`gatsby`, `application`, `react`]} />
    <Sidebar />
    <Container>
      <Content>
        <Heading>Typography</Heading>
        <Paragraph>
          You can find documentation and examples for Muhsis UI typography,
          including global settings, headings, body texts, lists and more.
        </Paragraph>

        <Heading variant="h3" mt={4}>
          Text Elements
        </Heading>
        <UnorderedList mt={3} mb={4}>
          <ListItem>
            <Strong>Heading : </Strong> Used for headings. <Code>h1</Code>{' '}
            element by default.
          </ListItem>
          <ListItem>
            <Strong>Paragraph : </Strong> Used for paragraphs. <Code>p</Code>{' '}
            element by default.
          </ListItem>
          <ListItem>
            <Strong>Text : </Strong> Used for single-line texts.{' '}
            <Code>span</Code> element by default.
          </ListItem>
          <ListItem>
            <Strong>Link : </Strong> Used for anchor links. <Code>a</Code>{' '}
            element by default.
          </ListItem>
          <ListItem>
            <Strong>Strong : </Strong> Used for bold texts. <Code>strong</Code>{' '}
            element by default.
          </ListItem>
          <ListItem>
            <Strong>Small : </Strong> Used for inline small tests.{' '}
            <Code>small</Code> element by default.
          </ListItem>
          <ListItem>
            <Strong>Code : </Strong> Used for inline code texts.{' '}
            <Code>code</Code> element by default.
          </ListItem>
          <ListItem>
            <Strong>Pre : </Strong> Used for preformatted content.{' '}
            <Code>pre</Code> element by default.
          </ListItem>
        </UnorderedList>

        <Heading variant="h3">List Elements</Heading>
        <UnorderedList mt={3} mb={4}>
          <ListItem>
            <Strong>UnorderedList : </Strong> Used for unordered lists.{' '}
            <Code>ul</Code> element by default.
          </ListItem>
          <ListItem>
            <Strong>OrderedList : </Strong> Used for ordered lists.{' '}
            <Code>ol</Code> element by default.
          </ListItem>
          <ListItem>
            <Strong>ListItem : </Strong> Used for list items insisde unordered
            and ordered lists. <Code>li</Code> element by default.
          </ListItem>
        </UnorderedList>

        <Paragraph>
          We use 3 font family stacks. <Code>ui</Code>, <Code>display</Code>,
          and <Code>monospace</Code>. We use <Code>Mukta</Code> as our default
          font for ui and display categories.
        </Paragraph>

        <Playground
          title="Heading Styles"
          scope={headingScope}
          codeText={headingCodeText}
        />

        <Playground
          title="Paragraph Styles"
          description={
            <Paragraph>
              You can apply <Code>iSLead</Code> property to{' '}
              <Code>Paragraph</Code> component. View properties table to view
              all properties that can be applied to component.
            </Paragraph>
          }
          scope={paragraphScope}
          codeText={paragraphCodeText}
        />

        <Playground
          title="Text Styles"
          description={
            <Paragraph>
              View properties table to view all properties that can be applied
              to component.
            </Paragraph>
          }
          scope={textScope}
          codeText={textCodeText}
        />

        <Playground
          title="Link Styles"
          description={
            <Paragraph>
              You can apply regular html anchor properties such as{' '}
              <Code>href</Code>, <Code>target</Code> to <Code>Link</Code>{' '}
              component. View properties table to view all properties that can
              be applied to component.
            </Paragraph>
          }
          scope={linkScope}
          codeText={linkCodeText}
        />
      </Content>
    </Container>
  </Layout>
)

export default TypographyPage
