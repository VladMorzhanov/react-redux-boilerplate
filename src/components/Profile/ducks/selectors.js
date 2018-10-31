import { createSelector } from 'reselect'

const profileSelector = state => state.profile

const getUsername = createSelector(profileSelector, state => state.username)
const getEmail = createSelector(profileSelector, state => state.email)

export default {
  getUsername,
  getEmail
}
