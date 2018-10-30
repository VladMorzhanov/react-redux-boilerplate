import { createAction } from 'redux-actions'
import types from './actionTypes'

export const fetchUserData = createAction(types.FETCH_USER_DATA)
export const fetchedUserData = createAction(types.FETCHED_USER_DATA)
export const failedFetchUserData = createAction(types.FAILED_FETCH_USED_DATA)

export default {
  fetchUserData,
  fetchedUserData,
  failedFetchUserData
}
