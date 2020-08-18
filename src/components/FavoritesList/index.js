import React from 'react'
import { Link, Grid, Image } from './styles'

export const FavoritesList = ({ favorites = [] }) => {
  return (
    <Grid>
      {
        favorites.map(favorite => (
          <Link key={favorite.id} to={`/detail/${favorite.id}`}>
            <Image src={favorite.src} />
          </Link>
        ))
      }
    </Grid>
  )
}
