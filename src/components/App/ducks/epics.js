import { ofType, mergeMap, catchError } from 'rxjs'
import actionTypes from './actionTypes'
import { finishAsyncAction, failedAsyncAction } from './actions'

const asyncAction = action$ =>
  action$.pipe(
    ofType(actionTypes.START_ASYNC_ACTION),
    mergeMap(action =>
      setTimeout(() => {
        finishAsyncAction(action.payload)
      }, 100)
    ).pipe(catchError(error => failedAsyncAction(error)))
  )

export default {
  asyncAction
}
