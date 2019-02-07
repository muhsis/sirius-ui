import { is, num, cascade, get } from './misc'

export const unit = unit => value => {
  return num(value) ? `${value}${unit}` : value
}

export const lazyTh = name => props => {
  return cascade(p => get(p.theme, name), props)
}

export const th = (name, transform) => props => {
  const result = lazyTh(name)(props)
  if (!is(result)) {
    throw new Error(`"${name}" not found in theme`)
  }

  return transform ? transform(result) : result
}

export const mixin = (name, ...args) => props => {
  return props.theme[name](props)(...args)
}
