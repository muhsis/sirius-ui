import { mix, parseToRgb, rgba } from 'polished'
import { thd, mixin } from '../utils'

export const black = '#000'
export const white = '#fff'

export const grays = {
  darker: '#121217',
  dark: '#17171d',
  black: '#000000',
  slate: '#5f6e78',
  silver: '#bec4c8',
  smoke: '#dee1e3',
  snow: '#f8f9f9',
  white: '#ffffff',
}

export const blue = '#007ced'
export const indigo = '#6610f2'
export const purple = '#6f42c1'
export const pink = '#e83e8c'
export const red = '#dc3545'
export const brick = '#bd4932'
export const orange = '#fd7e14'
export const yellow = '#ffc107'
export const green = '#28a745'
export const teal = '#20c997'
export const cyan = '#17a2b8'
export const universe = '#fff8e7'

export const brand = {
  primary: blue,
  secondary: indigo,
  success: green,
  info: cyan,
  warning: yellow,
  danger: red,
  light: grays.silver,
  dark: grays.dark,
}

function getTints() {
  const tintObj = {}

  Object.keys(brand).forEach(key => {
    tintObj[key] = rgba(brand[key], 0.1)
  })

  return tintObj
}

export const tints = getTints()

export const primary = blue
export const secondary = indigo
export const success = green
export const info = cyan
export const warning = yellow
export const danger = red
export const light = grays.silver
export const { dark } = grays

export const colorVariants = thd('colorVariants', [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
])

export const colors = {
  black,
  white,
  ...grays,
  blue,
  indigo,
  purple,
  pink,
  red,
  brick,
  orange,
  yellow,
  green,
  teal,
  cyan,
  universe,
  ...brand,
}

export const colorInterval = thd('colorInterval', 0.08)

export const colorVariant = mixin('colorVariant', variant => p => {
  const thValue = thd(variant)(p)
  if (thValue) return thValue
  const colorValue = colors(p)[variant]
  if (colorValue) return colorValue(p)
  return variant
})

export const colorLevel = mixin('colorLevel', (color, level) => p => {
  const baseColor = level > 0 ? black(p) : white(p)
  const absLevel = Math.abs(level)
  return mix(absLevel * colorInterval(p), baseColor, color)
})

export const yiqContrastedThreshold = thd('yiqContrastedThreshold', 150)
export const yikTextDark = thd('yikTextDark', '#111')
export const yikTextLight = thd('yikTextLight', '#fff')

export const colorYik = mixin('colorYik', color => p => {
  const { red: r, green: g, blue: b } = parseToRgb(color)
  const yik = (r * 299 + g * 587 + b * 114) / 1000
  return yik >= yiqContrastedThreshold(p) ? yikTextDark(p) : yikTextLight(p)
})
