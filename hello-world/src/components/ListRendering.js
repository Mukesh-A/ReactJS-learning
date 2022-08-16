import React from 'react'

function ListRendering() {
    const names = ['mukesh', 'raj', 'kumar']
  return (
    <div>
        {
            names.map(name =>  <h2>{name}</h2>)
        }
     
    </div>
  )
}

export default ListRendering
