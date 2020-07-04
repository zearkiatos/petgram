import React from 'react'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { PhotoCardsList } from './components/PhotoCardsList'

export const App = () => (
  <div>
    <GlobalStyles />
    <CategoriesList />
    <PhotoCardsList />
  </div>
)
