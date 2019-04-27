import React from 'react'
import logo from './react.svg'

import { Link } from 'react-router-dom'

import css from './Home.module.scss'

class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={css.home}>
        <div className={css.header}>
          <img src={logo} className={css.logo} alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className={css.intro}>
          Home Page
        </p>
        <ul className={css.resources}>
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
