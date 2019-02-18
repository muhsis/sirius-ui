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

export const headingsMarginBottom = '.5rem'
export const headingsFontFamily = fontFamily
export const headingsFontWeight = 500
export const headingsLineHeight = 1.2
export const headingsColor = 'inherit'

export const h1FontSize = '2.5rem'
export const h2FontSize = '2rem'
export const h3FontSize = '1.75rem'
export const h4FontSize = '1.5rem'
export const h5FontSize = '1.25rem'
export const h6FontSize = '1rem'

export const display1Size = '6rem'
export const display2Size = '5.5rem'
export const display3Size = '4.4rem'
export const display4Size = '3.5rem'

export const display1Weight = 300
export const display2Weight = 300
export const display3Weight = 300
export const display4Weight = 300

export const displayLineHeight = headingsLineHeight
