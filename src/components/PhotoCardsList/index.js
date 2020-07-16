import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const PhotoCardsList = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map(photoCardId => <li key={photoCardId}><PhotoCard id={photoCardId} /></li>)}
    </ul>
  )
}
