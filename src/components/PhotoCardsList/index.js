import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const PhotoCardsListComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoCard {...photo} />
        </li>
      ))}
    </ul>
  )
}
