import { darken } from 'polished'
import { css } from 'styled-components'
import { mixin } from '../utils'
import { colorVariant, colorYik } from './color'
import { controlFocus } from './control'
import {
  inputBtnPaddingY,
  inputBtnPaddingX,
  inputBtnLineHeight,
  inputBtnPaddingYSm,
  inputBtnPaddingXSm,
  inputBtnLineHeightSm,
  inputBtnPaddingYLg,
  inputBtnPaddingXLg,
  inputBtnLineHeightLg,
} from './input'

export const btnPaddingY = inputBtnPaddingY
export const btnPaddingX = inputBtnPaddingX
export const btnLineHeight = inputBtnLineHeight

export const btnPaddingYSm = inputBtnPaddingYSm
export const btnPaddingXSm = inputBtnPaddingXSm
export const btnLineHeightSm = inputBtnLineHeightSm

export const btnPaddingYLg = inputBtnPaddingYLg
export const btnPaddingXLg = inputBtnPaddingXLg
export const btnLineHeightLg = inputBtnLineHeightLg

export const btnBorderWidth = 0
export const btnDisabledOpacity = 0.7

export const btnVariant = mixin('btnVariant', variant => p => {
  const color = colorVariant(variant)(p)
  return css`
    color: ${colorYik(color)(p)};
    background-color: ${color};

    &:focus {
      ${controlFocus(color)(p)};
    }

    &:not(:disabled):hover,
    &:not(:disabled):active {
      background-color: ${darken(0.05, color)};
    }
  `
})
