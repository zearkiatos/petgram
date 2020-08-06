import React from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { PhotoCardsList } from '../containers/PhotoCardsList'

export const Home = ({ categoryId }) => {
  return (
    <>
      <CategoriesList />
      <PhotoCardsList categoryId={categoryId} />
    </>
  )
}
