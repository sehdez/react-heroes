import React from 'react'
import { HeroList } from '../heros/HeroList'

export const MarvelScreen = () => {
  return (
    <div>
        <h2>MarvelScreen</h2>
        <hr />
        <HeroList
          publisher="Marvel Comics"
        />
    </div>
  )
}