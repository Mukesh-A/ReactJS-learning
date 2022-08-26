import React, {useReducer} from 'react'

const initalState = {
    firsCounter: 0,
    secondCounter:10,
}
const reducer = (state, action)=>{
    switch(action.type){
        case 'increment' :
            return { ...state, firsCounter: state.firsCounter + action.value}
        case 'decrement' :
            return {...state,firsCounter: state.firsCounter - action.value}

        case 'increment2' :
            return {...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2' :
            return {...state,secondCounter: state.secondCounter - action.value}
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
        <div>sec count- {count.secondCounter}</div>
         
      <button onClick={()=> dispatch({type: 'increment', value:1})}>Increment</button>
      <button onClick={()=> dispatch({type:'decrement', value:1})}>Decrement</button>

      <button onClick={()=> dispatch({type: 'increment2', value:5})}>Increment5</button>
      <button onClick={()=> dispatch({type:'decrement2', value:5})}>Decrement5</button>

      <button onClick={()=> dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default ReducerCountTwo
