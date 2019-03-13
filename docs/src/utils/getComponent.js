// Get
import alertDocs from '../../../src/elements/alert/docs'
import blankSlateDocs from '../../../src/elements/blank-slate/docs'
import cardDocs from '../../../src/elements/card/docs'
import carouselDocs from '../../../src/elements/carousel/docs'
import cornerDialogDocs from '../../../src/elements/corner-dialog/docs'
import dialogDocs from '../../../src/elements/dialog/docs'
import dropdownDocs from '../../../src/elements/dropdown/docs'
import listviewDocs from '../../../src/elements/listview/docs'
import popoverDocs from '../../../src/elements/popover/docs'
import portalDocs from '../../../src/elements/portal/docs'
import sideSheetDocs from '../../../src/elements/side-sheet/docs'
import spinnerDocs from '../../../src/elements/spinner/docs'
import switchDocs from '../../../src/elements/switch/docs'
import tabDocs from '../../../src/elements/tab/docs'
import toasterDocs from '../../../src/elements/toaster/docs'
import tooltipDocs from '../../../src/elements/tooltip/docs'
import widgetDocs from '../../../src/elements/widget/docs'

const mapper = {
  alert: alertDocs,
  'blank-slate': blankSlateDocs,
  card: cardDocs,
  carousel: carouselDocs,
  'corner-dialog': cornerDialogDocs,
  dialog: dialogDocs,
  dropdown: dropdownDocs,
  listview: listviewDocs,
  popover: popoverDocs,
  portal: portalDocs,
  'side-sheet': sideSheetDocs,
  spinner: spinnerDocs,
  switch: switchDocs,
  tab: tabDocs,
  toaster: toasterDocs,
  tooltip: tooltipDocs,
  widget: widgetDocs,
}

function getComponent(name) {
  return mapper[name]
}

export default getComponent
