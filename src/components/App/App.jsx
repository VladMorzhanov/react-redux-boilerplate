import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import Router from '../../router/router'
import createStore from '../../store'

const history = createBrowserHistory()
const store = createStore()

const App = () => (
  <Provider store={store}>
    <main className="main">
      <Router history={history} />
    </main>
  </Provider>
)

export default App
