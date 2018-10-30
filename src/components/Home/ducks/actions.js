import { createAction } from 'redux-actions'
import types from './actionTypes'

export const increaseCounter = createAction(types.HOME_INCREASE_COUNTER)
export const descreaseCounter = createAction(types.HOME_DECREASE_COUNTER)

export default {
  increaseCounter,
  descreaseCounter
}
