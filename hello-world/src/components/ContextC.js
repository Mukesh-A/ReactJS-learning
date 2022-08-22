import React from 'react'
import { UserConsumer } from './userContext'

function ContextC() {
  return (
 <UserConsumer>
  {
    (usename)=>{
      return <div>hello {usename}</div>
    }
  }
 </UserConsumer>
  )
}

export default ContextC
