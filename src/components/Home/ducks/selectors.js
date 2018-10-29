import { createSelector } from 'reselect'

const uiSelector = state => state

const showLoaderSelector = createSelector(uiSelector, ui => ui.showLoader)

export default {
  showLoaderSelector
}
