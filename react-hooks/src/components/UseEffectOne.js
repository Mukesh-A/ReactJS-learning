import React,{useState, useEffect} from 'react'

function UseEffectOne() {

    const [count, setCount] = useState(0)

    useEffect(()=>{
      console.log("mounted")
        document.title = `you clicked ${count}`

        // return ()=>{
        //   console.log("unmounted")
        //   document.title = `you clicked ${count}`
        // }
    },[])
   
  return (
    <div>
      <button onClick={ ()=> setCount(prevCount=>prevCount + 1)}>Click{count}</button>
    </div>
  )
}

export default UseEffectOne
