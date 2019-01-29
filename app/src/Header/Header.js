import React from 'react'
import { Menu } from './Menu'

const styles = {
  position: 'fixed',
  width: '100%'
}

export default function Header(props) {
  return (
    <div style={styles}>
      <Menu />
    </div>
  )
}
