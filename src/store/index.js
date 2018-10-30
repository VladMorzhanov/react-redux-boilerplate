import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import appReducer, { appEpics } from '../components/App/ducks'
import homeReducer from '../components/Home/ducks'
import profileReducer, { profileEpics } from '../components/Profile/ducks'

const epicMiddleware = createEpicMiddleware()

const epics = combineEpics(appEpics, profileEpics)

const configure = (initialState = {}) => {
  const reducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    home: homeReducer
  })
  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(epicMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
}

epicMiddleware.run(epics)

export default configure
