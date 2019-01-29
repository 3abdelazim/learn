import React from 'react'

import MenuItem from './MenuItem'

export default class MenuItemContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
    this.setHovered = this.setHovered.bind(this)
    this.unsetHovered = this.unsetHovered.bind(this)
  }

  setHovered() {
    this.setState({ hovered: true })
  }

  unsetHovered() {
    this.setState({ hovered: false })
  }

  render() {
    const { title, link } = this.props
    const hovered = this.state.hovered
    const setHovered = this.setHovered
    const unsetHovered = this.unsetHovered

    return (
      <MenuItem
        title={title}
        link={link}
        hovered={hovered}
        setHovered={setHovered}
        unsetHovered={unsetHovered} />
    )
  }
}
