import React from 'react'
import { FavoritesWithQuery } from '../containers/GetFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Your Favorites' subtitle='Here you can found your favorites photos ⭐️'>
    <FavoritesWithQuery />
  </Layout>
)
