import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

import './App.css'

const App = () => (
  <Switch>
    <Route exact={true} path="/" component={Home} />
    <Route exact={true} path="/test" component={Home} />
  </Switch>
)

export default App
