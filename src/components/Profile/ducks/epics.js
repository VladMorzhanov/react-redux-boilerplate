import { map, catchError, delay } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import actionTypes from './actionTypes'
import { fetchedUserData, failedFetchUserData } from './actions'

const profileAsyncAction = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.FETCH_USER_DATA),
    delay(200),
    map(() =>
      fetchedUserData({
        username: `${state$.value.profile.username}#`,
        email: `#${state$.value.profile.email}`
      })
    ),
    // map(action =>
    //   fetchedUserData({
    //     ...action,
    //     payload: {
    //       username: `${state$.profile.username}#`,
    //       email: `#${state$.profile.email}`
    //     }
    //   })
    // ),
    catchError(error => failedFetchUserData(error))
  )

export default {
  profileAsyncAction
}
