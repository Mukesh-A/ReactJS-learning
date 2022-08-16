import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log("clicked")
    }
  return (
    <div>
        {/* => wen u give () for function name in onlick ,then when the page reload in the website it would automatically call that method before clicking */}

        {/* so we have to not add () ,so that that fuction will execute after the click */}
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
