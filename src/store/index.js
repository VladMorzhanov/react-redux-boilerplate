import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import appReducer, { appEpics } from '../components/App/ducks'
import profileReducer, { profileEpics } from '../components/Profile/ducks'
import homeReducer from '../components/Home/ducks'

const configure = (initialState = {}) => {
  const reducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    home: homeReducer
  })

  const epics = combineEpics(
    ...Object.values(appEpics),
    ...Object.values(profileEpics)
  )

  const epicMiddleware = createEpicMiddleware()

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(epicMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  epicMiddleware.run(epics)

  return store
}

export default configure
