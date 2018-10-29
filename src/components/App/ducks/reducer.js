import { handleActions } from 'redux-actions'
import * as types from './actionTypes'

const initialState = {
  showLoader: true
}

const UiReducer = {
  [types.SHOW_LOADER]: state => ({
    ...state,
    showLoader: true
  }),
  [types.HIDE_LOADER]: state => ({
    ...state,
    showLoader: false
  })
}

export default handleActions(UiReducer, initialState)
