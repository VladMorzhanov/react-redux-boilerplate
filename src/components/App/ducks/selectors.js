import { createSelector } from 'reselect'

const appSelector = state => state

const getData = createSelector(appSelector, state => state.data)

export default {
  getData
}
