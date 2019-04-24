import React from 'react'
import logo from './react.svg'

import { Link } from 'react-router-dom'

import './Home.css'

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className="Home-intro">
          Home Page
        </p>
        <ul className="Home-resources">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
