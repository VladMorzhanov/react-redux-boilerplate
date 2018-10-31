import { catchError, delay, map } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import actionTypes from './actionTypes'
import { finishAsyncAction, failedAsyncAction } from './actions'

const asyncAction = action$ =>
  action$.pipe(
    ofType(actionTypes.START_ASYNC_ACTION),
    delay(200),
    map(action => finishAsyncAction(action.payload)),
    catchError(error => failedAsyncAction(error))
  )

export default {
  asyncAction
}
