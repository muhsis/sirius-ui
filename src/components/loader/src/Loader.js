import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, keyframes } from 'styled-components'
import { rgba } from 'polished'

import { Box } from '../../../elements/box'
import { Heading, Text } from '../../../elements/typography'

const blobBottomAnimation = keyframes`
  25%, 50%, 75% {
    top: 50%;
    left: 100%;
  }
  100% {
    top: 0;
    left: 50%;
  }
`

const blobLeftAnimation = keyframes`
  25% {
    top: 50%;
    left: 0;
  }
  50%, 100% {
    top: 100%;
    left: 50%;
  }
`

const blobTopAnimation = keyframes`
  50% {
    top: 0;
    left: 50%;
  }
  75%, 100% {
    top: 50%;
    left: 0;
  }
`

const blobMoverAnimation = keyframes`
  0%, 100% {
    top: 0;
    left: 50%;
  }
  25% {
    top: 50%;
    left: 100%;
  }
  50% {
    top: 100%;
    left: 50%;
  }
  75% {
    top: 50%;
    left: 0;
  }
`

const ScLoader = styled.div`
  background-color: ${p => rgba(p.theme.colors.white, 0.875)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ScBlobContainer = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
`

const ScBlob = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  border: 2px solid ${p => p.theme.colors.smoke};
  background-color: ${p => p.theme.colors.smoke};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`

const ScBlobTop = styled(ScBlob)`
  top: 0;
  animation: ${blobTopAnimation} 1s infinite ease-in;
`

const ScBlobBottom = styled(ScBlob)`
  top: 100%;
  animation: ${blobBottomAnimation} 1s infinite ease-in;
`

const ScBlobLeft = styled(ScBlob)`
  left: 0;
  animation: ${blobLeftAnimation} 1s infinite ease-in;
`

const ScBlobMove = styled(ScBlob)`
  border: 2px solid ${p => p.theme.colors.primary};
  background-color: ${p => p.theme.colors.primary};
  top: 0;
  animation: ${blobMoverAnimation} 1s infinite ease-in;
`

class Loader extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
  }

  static defaultProps = {
    title: 'Yükleniyor',
    text: 'Lütfen işlem devam ederken bekleyiniz.',
  }

  render() {
    return (
      <ScLoader>
        <ScBlobContainer>
          <ScBlobTop theme={this.props.theme} />
          <ScBlobBottom theme={this.props.theme} />
          <ScBlobLeft theme={this.props.theme} />

          <ScBlobMove theme={this.props.theme} />
        </ScBlobContainer>

        <Box mt="3rem" maxWidth={400} textAlign="center">
          <Heading variant="h5" m={0} p={0}>
            {this.props.title}
          </Heading>
          <Text color="slate" fontSize="1rem">
            {this.props.text}
          </Text>
        </Box>
      </ScLoader>
    )
  }
}

export default withTheme(Loader)
