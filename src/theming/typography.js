import { modularScale } from 'polished'

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]
export const fontFamilyBase =
  '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
export const fontFamilyDisplay =
  '"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
export const fontFamilyMonospace =
  '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace'
export const fontFamily = fontFamilyBase

export const fontSizeBase = '1rem'
export const fontSizeSm = modularScale(-1, fontSizeBase)
export const fontSizeLg = modularScale(1, fontSizeBase)

export const fontWeightLight = 300
export const fontWeightNormal = 400
export const fontWeightBold = 700

export const lineHeightBase = 1.5
export const lineHeightSm = 1.5
export const lineHeightLg = 1.5
