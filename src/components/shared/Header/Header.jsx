import './Header.styl'
import { Link } from 'react-router-dom'
import React from 'react'

const Header = ({ title }) => (
  <header>
    <div className="title">{title}</div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  </header>
)

export default Header
