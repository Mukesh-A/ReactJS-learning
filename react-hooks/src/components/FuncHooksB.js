import React, {useContext} from 'react'
import FuncHookC from './FuncHookC'
import {UserContext, Channelcontext} from '../App'

function FuncHooksB() {

    const user = useContext(UserContext)
    const channel = useContext(Channelcontext)

  return (
    <div>
      {user}-{channel}
    </div>
  )
}

export default FuncHooksB
