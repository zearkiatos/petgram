import React from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { PhotoCardsList } from '../containers/PhotoCardsList'
import { Layout } from '../components/Layout'

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Photo apps for your pets' subtitle='With Petgram you can found domestic animals very beautiful'>
      <CategoriesList />
      <PhotoCardsList categoryId={categoryId} />
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
