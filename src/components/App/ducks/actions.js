import { createAction } from 'redux-actions'
import types from './actionTypes'

export const startAsyncAction = createAction(types.STARTED_ASYNC_ACTION)
export const finishAsyncAction = createAction(types.FINISHED_ASYNC_ACTION)
export const failedAsyncAction = createAction(types.FAILED_ASYNC_ACTION)

export default {
  startAsyncAction,
  finishAsyncAction,
  failedAsyncAction
}
