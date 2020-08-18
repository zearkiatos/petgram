import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FavoritesList } from '../components/FavoritesList'
import { GridLoadingSkeleton } from '../shared/components/GridLoadingSkeleton'

const GET_FAVORITES = gql`
    query getFavs {
        favs {
            id
            categoryId
            src
            likes
            userId
        }
    }
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <GridLoadingSkeleton count={20} />
  if (error) return <p>⛔ Error  </p>
  const { favs } = data
  return <FavoritesList favorites={favs} />
}

export const FavoritesWithQuery = () => (
  <Query query={GET_FAVORITES} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)
