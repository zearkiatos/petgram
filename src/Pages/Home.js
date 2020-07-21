import React from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { PhotoCardsList } from '../containers/PhotoCardsList'

export const Home = ({ id }) => {
  return (
    <>
      <CategoriesList />
      <PhotoCardsList categoryId={id} />
    </>
  )
}
