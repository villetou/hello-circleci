import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Contacts from './Contacts'
import Home from './Home'

import './App.css'

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/contacts" component={Contacts} />
  </Switch>
)

export default App
