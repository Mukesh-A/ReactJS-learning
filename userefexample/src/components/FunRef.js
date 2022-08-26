import React, {useState, useEffect, useRef} from 'react'

function FunRef() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()
    useEffect(()=>{
         intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        },1000)
        return ()=>{
            clearInterval(intervalRef.current)
        };
    }, [])

  return (
    <div>
      Hooks timer = {timer} 
      <button onClick={()=> clearInterval(intervalRef.current)}>resret</button>
    </div>
  )
}

export default FunRef
