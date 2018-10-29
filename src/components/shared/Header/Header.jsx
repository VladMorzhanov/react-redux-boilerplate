import React from 'react'
import { observer } from 'mobx-react'

const Header = ({ title }) => (
  <header>
    <div>{title}</div>
  </header>
)

export default observer(Header)
