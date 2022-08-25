import React from 'react'
import {UserContext, Channelcontext} from '../App'

function FuncHookC() {
  return (
    <div>
     <UserContext.Consumer>
        {
            user=>{
                return (<Channelcontext.Consumer>
                    {
                        channel =>{
                            return <div>User Context Value {user},{channel}</div>
                        }
                    }
                </Channelcontext.Consumer>
                )
            }
        }
     </UserContext.Consumer>
    </div>
  )
}

export default FuncHookC
