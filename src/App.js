import React from 'react'
import { CategoriesList } from './components/CategoriesList'
import { GlobalStyles } from './shared/styles/GlobalStyles'
import { PhotoCardsList } from './containers/PhotoCardsList'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <div>
      <GlobalStyles />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <CategoriesList />
            <PhotoCardsList categoryId={1} />
          </>
      }

    </div>
  )
}
