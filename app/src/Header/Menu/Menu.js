import React from 'react'
import { MenuItemContainer } from './MenuItem'

const styles = {
  position: 'fixed',
  height: 'auto',
  width: '100%',
}

const ulStyles = {
  margin: 0,
  paddingLeft: '5%'
}

export default function Menu(props) {
  return (
    <div style={styles}>
      <ul style={ulStyles}>
        <MenuItemContainer title="Home" link="/" />
        <MenuItemContainer title="Blog" link="/blog" />
        <MenuItemContainer title="Source" link="/source" />
      </ul>
    </div>
  )
}
