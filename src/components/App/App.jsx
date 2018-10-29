import React from 'react'
import { Provider } from 'mobx-react'
import { createBrowserHistory } from 'history'
import Router from '../../router/router'
import { createStores } from '../../stores/createStore'
import UserModel from '../../models/UserModel'

const history = createBrowserHistory()
const defautlUser = UserModel.create({
  name: 'Default Name'
})
const stores = createStores(history, defautlUser)

const App = () => (
  <Provider {...stores}>
    <main className="main">
      <Router history={history} />
    </main>
  </Provider>
)

export default App
