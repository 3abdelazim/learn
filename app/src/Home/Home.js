import React, { Component } from 'react'
import logo from '../logo.svg'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'fetching text...'
    }
  }

  async componentDidMount() {
    const response = await fetch('https://3abdelazim.com/api')
    const responseBody = await response.json()
    const text = responseBody.text
    this.setState({ text })
  }

  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <p>{this.state.text}</p>
          <a
            className="Home-link"
            href="https://github.com/3abdelazim/learn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source Code
          </a>
        </header>
      </div>
    )
  }
}

export default Home
