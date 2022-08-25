import React, {useReducer} from 'react'

const initalState = {
    firsCounter: 0
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'increment' :
            return {firsCounter: state.firsCounter + 1}
        case 'decrement' :
            return {firsCounter: state.firsCounter - 1}
        case 'reset' :
            return initalState
        default:
            return state
    }
}

function ReducerCountTwo() {

  const [count, dispatch] =  useReducer(reducer, initalState)
  return (
    <div>
        <div>count- {count.firsCounter}</div>
      <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
      <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
      <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCountTwo
