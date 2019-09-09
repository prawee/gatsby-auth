import React from 'react'
import NavBar from './nav-bar'

const layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default layout
