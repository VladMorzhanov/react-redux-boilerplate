import { createSelector } from 'reselect'

const profileSelector = state => state

const getUsername = createSelector(profileSelector, state => state.username)
const getUserEmail = createSelector(profileSelector, state => state.email)

export default {
  getUsername,
  getUserEmail
}
