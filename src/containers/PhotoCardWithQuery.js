import React, { Fragment } from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Skeleton from 'react-loading-skeleton'
const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id:ID!) {
        photo(id:$id) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

const renderPhotoCard = ({ loading, error, data = { photo: {} } }) => {
  const { photo = {} } = data
  return error
    ? renderError() : loading
      ? renderLoading() : <PhotoCard {...photo} />
}

const renderLoading = () => {
  return <>
    <Skeleton height={75} />
    <Skeleton height={32} width={50} />
         </>
}
const renderError = () => <p>⛔ Error  </p>
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderPhotoCard}
  </Query>
)
