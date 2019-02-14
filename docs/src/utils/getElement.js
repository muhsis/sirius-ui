// Get
import boxDocs from '../../../src/elements/box/docs'

const mapper = {
  box: boxDocs,
}

function getElement(name) {
  return mapper[name]
}

export default getElement
