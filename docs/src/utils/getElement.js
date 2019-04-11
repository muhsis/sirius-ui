// Get
import avatarDocs from '../../../src/elements/avatar/docs'
import badgeDocs from '../../../src/elements/badge/docs'
import boxDocs from '../../../src/elements/box/docs'
import buttonDocs from '../../../src/elements/button/docs'
import checkboxDocs from '../../../src/elements/checkbox/docs'
import dividerDocs from '../../../src/elements/divider/docs'
import formDocs from '../../../src/elements/form/docs'
import imageDocs from '../../../src/elements/image/docs'
import inputDocs from '../../../src/elements/input/docs'
import radioDocs from '../../../src/elements/radio/docs'
import selectDocs from '../../../src/elements/select/docs'
import tableDocs from '../../../src/elements/table/docs'
import tagDocs from '../../../src/elements/tag/docs'

const mapper = {
  avatar: avatarDocs,
  badge: badgeDocs,
  box: boxDocs,
  button: buttonDocs,
  checkbox: checkboxDocs,
  divider: dividerDocs,
  form: formDocs,
  image: imageDocs,
  input: inputDocs,
  radio: radioDocs,
  select: selectDocs,
  table: tableDocs,
  tag: tagDocs,
}

function getElement(name) {
  return mapper[name]
}

export default getElement
