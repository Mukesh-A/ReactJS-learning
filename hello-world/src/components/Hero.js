import React from 'react'

function Hero({heroName}) {
    if(heroName === 'joker'){
        throw new Error('not an hero')
    }
  return (
    <div>
      {heroName}
    </div>
  )
}

export default Hero
