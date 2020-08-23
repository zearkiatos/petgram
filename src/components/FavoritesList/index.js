import React from 'react'
import { Link, Grid, Image } from './styles'
import PropTypes from 'prop-types'

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

FavoritesList.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
