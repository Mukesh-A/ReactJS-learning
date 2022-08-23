import React, {useState} from 'react'

function HookCounter2() {
    const initalCount = 0
    const [count, setCount] = useState(initalCount)
  return (
    <div>
      Count:{count}
      <button onClick={()=>{setCount(initalCount)}}>Reset</button>
      <button onClick={()=>{setCount(prevstate => prevstate + 1)}}>Increment</button>
      <button onClick={()=>{setCount(prevstate => prevstate - 1)}}>Decrement</button>
    </div>
  )
}

export default HookCounter2
