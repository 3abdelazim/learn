import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header } from './Header'
import { Home } from './Home'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/blog" component={Home} />
              <Route path="/source" component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
