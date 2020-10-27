// Get
import alertDocs from '../../../src/components/alert/docs'
import blankSlateDocs from '../../../src/components/blank-slate/docs'
import cardDocs from '../../../src/components/card/docs'
import dropdownDocs from '../../../src/components/dropdown/docs'
import loaderDocs from '../../../src/components/loader/docs'
import paginationDocs from '../../../src/components/pagination/docs'
import popconfirmDocs from '../../../src/components/popconfirm/docs'
import popoverDocs from '../../../src/components/popover/docs'
import skeletonDocs from '../../../src/components/skeleton/docs'
import spinnerDocs from '../../../src/components/spinner/docs'
import switchDocs from '../../../src/components/switch/docs'
import tabDocs from '../../../src/components/tab/docs'
import tooltipDocs from '../../../src/components/tooltip/docs'

const mapper = {
  alert: alertDocs,
  'blank-slate': blankSlateDocs,
  card: cardDocs,
  dropdown: dropdownDocs,
  loader: loaderDocs,
  pagination: paginationDocs,
  popconfirm: popconfirmDocs,
  popover: popoverDocs,
  skeleton: skeletonDocs,
  spinner: spinnerDocs,
  switch: switchDocs,
  tab: tabDocs,
  tooltip: tooltipDocs,
}

function getComponent(name) {
  return mapper[name]
}

export default getComponent
