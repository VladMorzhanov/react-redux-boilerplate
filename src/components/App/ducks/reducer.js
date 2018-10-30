import { handleActions } from 'redux-actions'
import types from './actionTypes'

const initialState = {
  data: [0, 1, 2]
}

const AppReducer = {
  [types.START_ASYNC_ACTION]: state => ({
    ...state
  }),
  [types.FAILED_ASYNC_ACTION]: state => ({
    ...state
  }),
  [types.FINISHED_ASYNC_ACTION]: state => ({
    ...state
  })
}

export default handleActions(AppReducer, initialState)
