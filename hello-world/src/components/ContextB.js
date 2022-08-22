import React, { Component, useContext } from 'react'
import ContextC from './ContextC'
import UserContext from './userContext'

function ContextB() {

 
  return (
    <div>
      {/* Component b {this.context} */}
      <ContextC/>
    </div>
  )
}

// Component.contextType = UserContext

export default ContextB
