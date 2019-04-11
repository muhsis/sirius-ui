import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  space,
  width,
  color,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  alignSelf,
  justifySelf,
  borders,
  borderColor,
  borderRadius,
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  textAlign,
  fontSize,
} from 'styled-system'

/**
 * General component description. BOX!!
 */
const ScBox = styled.div`
  box-sizing: border-box;

  ${space}
  ${width}
  ${color}
  ${display}
  ${maxWidth}
  ${minWidth}
  ${height}
  ${maxHeight}
  ${minHeight}
  ${size}
  ${alignItems}
  ${alignContent}
  ${justifyContent}
  ${flexWrap}
  ${flexBasis}
  ${flexDirection}
  ${flex}
  ${alignSelf}
  ${justifySelf}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${position}
  ${zIndex}
  ${top}
  ${right}
  ${bottom}
  ${left}
  ${textAlign}
  ${fontSize}
`
class Box extends PureComponent {
  static propTypes = {
    /**
     * Composes some Box APIs.
     */
    amk: PropTypes.number,
    ...space.propTypes,
    ...width.propTypes,
    ...color.propTypes,
    ...display.propTypes,
    ...maxWidth.propTypes,
    ...minWidth.propTypes,
    ...height.propTypes,
    ...maxHeight.propTypes,
    ...minHeight.propTypes,
    ...size.propTypes,
    ...alignItems.propTypes,
    ...alignContent.propTypes,
    ...justifyContent.propTypes,
    ...flexWrap.propTypes,
    ...flexBasis.propTypes,
    ...flexDirection.propTypes,
    ...flex.propTypes,
    ...alignSelf.propTypes,
    ...justifySelf.propTypes,
    ...borders.propTypes,
    ...borderColor.propTypes,
    ...borderRadius.propTypes,
    ...position.propTypes,
    ...zIndex.propTypes,
    ...top.propTypes,
    ...right.propTypes,
    ...bottom.propTypes,
    ...left.propTypes,
    ...textAlign.propTypes,
    ...fontSize.propTypes,
  }

  static defaultProps = {
    amk: 8,
  }

  render() {
    return <ScBox {...this.props} />
  }
}
Box.displayName = 'Box'

export default Box
