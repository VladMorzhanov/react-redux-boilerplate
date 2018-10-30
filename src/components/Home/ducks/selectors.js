import { createSelector } from 'reselect'

const homeSelector = state => state

const getCounter = createSelector(homeSelector, state => state.counter)

export default {
  getCounter
}
