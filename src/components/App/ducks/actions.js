import { createAction } from 'redux-actions'
import * as types from './actionTypes'

export const showLoader = createAction(types.SHOW_LOADER)
export const hideLoader = createAction(types.HIDE_LOADER)

export default {
  showLoader,
  hideLoader
}
