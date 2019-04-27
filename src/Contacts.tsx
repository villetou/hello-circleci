import React from 'react'
import logo from './react.svg'

import { Link } from 'react-router-dom'

import css from './Home.module.scss'

class Contacts extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={css.home}>
        <div className={css.header}>
          <img src={logo} className={css.logo} alt="logo" />
          <h2>Contacts</h2>
        </div>
        <p className={css.intro}>
          Contacts page would be nice! 😎
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

export default Contacts
