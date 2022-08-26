import React,{useEffect, useRef}  from 'react'

function UseRefHooks() {
    const inputRef = useRef(null)

    useEffect(()=>{
        //focus the input feild
        inputRef.current.focus()
    },[])
 
  return (
    <div>
      <input ref={inputRef} type='text'/>
    </div>
  )
}

export default UseRefHooks
