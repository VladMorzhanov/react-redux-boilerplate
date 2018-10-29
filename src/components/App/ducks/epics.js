import * as actionTypes from './actionTypes'

const exampleEpic = action$ =>
  action$.ofType(actionTypes.HIDE_LOADER).switchMap(el => el)

export default {
  exampleEpic
}
