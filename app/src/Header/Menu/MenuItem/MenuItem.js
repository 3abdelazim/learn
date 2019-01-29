import React from 'react'
import { Link } from 'react-router-dom'

const liStyles = {
  padding: '2% 5% 2% 0',
  listStyleType: 'none',
  float: 'left'
}

let linkStyles = {
  fontFamily: 'sans-serif',
  fontSize: '1.2em',
  letterSpacing: '0.15em',
  textDecoration: 'none',
  border: 0
}

export default function MenuItem(props) {
  const { title, link, hovered, setHovered, unsetHovered } = props
  if (hovered) {
    linkStyles = { ...linkStyles, color: '#ecaf1e' }
  } else {
    linkStyles = { ...linkStyles, color: '#bbb' }
  }

  return (
    <li style={liStyles}>
      <Link style={linkStyles} onMouseEnter={setHovered} onMouseLeave={unsetHovered} to={link}>
        {title}
      </Link>
    </li>
  )
}
