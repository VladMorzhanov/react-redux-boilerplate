import React from 'react'

export const Container = ({ children, title }) => (
  <div className="container">
    <div>{title}</div>
    {children}
  </div>
)

export default Container
