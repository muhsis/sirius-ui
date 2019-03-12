'use strict'

function _templateObject() {
  var data = _taggedTemplateLiteral([
    '\n    ',
    '\n    const ',
    ' = (',
    ') => ',
    '\n    ',
    '\n  ',
  ])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }),
  )
}

function template(_ref, opts, _ref2) {
  var template = _ref.template
  var imports = _ref2.imports,
    componentName = _ref2.componentName,
    props = _ref2.props,
    jsx = _ref2.jsx,
    exports = _ref2.exports

  // Changing output component name
  componentName.name = componentName.name.replace('Svg', 'Icon')
  exports.declaration.name = exports.declaration.name.replace('Svg', 'Icon')

  return template.ast(
    _templateObject(),
    imports,
    componentName,
    props,
    jsx,
    exports,
  )
}

module.exports = template
