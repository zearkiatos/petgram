import React from 'react'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { PhotoCardsList } from './components/PhotoCardsList'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyles />
    <Logo />
    <CategoriesList />
    <PhotoCardsList />
  </div>
)
