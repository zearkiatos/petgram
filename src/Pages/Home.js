import React from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { PhotoCardsList } from '../containers/PhotoCardsList'
import { Layout } from '../components/Layout'

export const Home = ({ categoryId }) => {
  return (
    <Layout title='Photo apps for your pets' subtitle='With Petgram you can found domestic animals very beautiful'>
      <CategoriesList />
      <PhotoCardsList categoryId={categoryId} />
    </Layout>
  )
}
