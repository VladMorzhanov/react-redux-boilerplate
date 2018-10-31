import './Container.styl'
import React from 'react'

export const Container = ({ children, title }) => (
  <div className="container">
    <div className="title">{title}</div>
    <div className="children">{children}</div>
  </div>
)

export default Container
