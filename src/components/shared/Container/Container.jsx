import React from 'react'
import { inject, observer } from 'mobx-react'

const Container = ({ uiStore, content }) => (
  <div className="container">
    {content}
    {uiStore.user.name}
  </div>
)

export default inject('uiStore')(observer(Container))
