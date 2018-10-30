import { handleActions } from 'redux-actions'
import types from './actionTypes'

const initialState = {
  email: 'example@email.com',
  username: 'example'
}

const ProfileReducer = {
  [types.FETCH_USER_DATA]: state => state,
  [types.FETCHED_USER_DATA]: (state, { payload }) => ({
    ...state,
    email: payload.email,
    username: payload.username
  }),
  [types.FAILED_FETCH_USED_DATA]: state => state
}

export default handleActions(ProfileReducer, initialState)
