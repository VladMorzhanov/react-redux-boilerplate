import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import appReducer, { appEpics } from '../components/App/ducks'
import homeReducer, { homeEpics } from '../components/Home/ducks'
import profileReducer, { profileEpics } from '../components/Profile/ducks'

const epicMiddleware = createEpicMiddleware()

const epics = combineEpics(appEpics, homeEpics, profileEpics)

const configure = (initialState = {}) => {
  const reducer = combineReducers({
    app: appReducer,
    profile: homeReducer,
    home: profileReducer
  })
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(epicMiddleware))
  )
}

epicMiddleware.run(epics)

export default configure
