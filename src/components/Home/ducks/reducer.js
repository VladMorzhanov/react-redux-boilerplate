import { handleActions } from 'redux-actions'
import types from './actionTypes'

const initialState = {
  counter: 0
}

const HomeReducer = {
  [types.HOME_INCREASE_COUNTER]: state => ({
    ...state,
    counter: state.counter + 1
  }),
  [types.HOME_DECREASE_COUNTER]: state => ({
    ...state,
    counter: state.counter - 1
  })
}

export default handleActions(HomeReducer, initialState)
