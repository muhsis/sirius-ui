// Get
import alertDocs from '../../../src/components/alert/docs'
import blankSlateDocs from '../../../src/components/blank-slate/docs'
import cardDocs from '../../../src/components/card/docs'
import comboboxDocs from '../../../src/components/combobox/docs'
import dropdownDocs from '../../../src/components/dropdown/docs'
import listviewDocs from '../../../src/components/listview/docs'
import popconfirmDocs from '../../../src/components/popconfirm/docs'
import portalDocs from '../../../src/components/portal/docs'
import progressDocs from '../../../src/components/progress/docs'
import sideSheetDocs from '../../../src/components/side-sheet/docs'
import skeletonDocs from '../../../src/components/skeleton/docs'
import spinnerDocs from '../../../src/components/spinner/docs'
import stepsDocs from '../../../src/components/steps/docs'
import switchDocs from '../../../src/components/switch/docs'
import tabDocs from '../../../src/components/tab/docs'
import tooltipDocs from '../../../src/components/tooltip/docs'

const mapper = {
  alert: alertDocs,
  'blank-slate': blankSlateDocs,
  card: cardDocs,
  combobox: comboboxDocs,
  dropdown: dropdownDocs,
  listview: listviewDocs,
  popconfirm: popconfirmDocs,
  portal: portalDocs,
  progress: progressDocs,
  'side-sheet': sideSheetDocs,
  skeleton: skeletonDocs,
  spinner: spinnerDocs,
  steps: stepsDocs,
  switch: switchDocs,
  tab: tabDocs,
  tooltip: tooltipDocs,
}

function getComponent(name) {
  return mapper[name]
}

export default getComponent
