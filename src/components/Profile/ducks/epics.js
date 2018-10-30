import { ofType, mergeMap, catchError } from 'rxjs'
import actionTypes from './actionTypes'
import { fetchedUserData, failedFetchUserData } from './actions'

const asyncAction = action$ =>
  action$.pipe(
    ofType(actionTypes.FETCH_USER_DATA),
    mergeMap(action =>
      setTimeout(() => {
        fetchedUserData(action.payload)
      }, 100)
    ).pipe(catchError(error => failedFetchUserData(error)))
  )

export default {
  asyncAction
}
