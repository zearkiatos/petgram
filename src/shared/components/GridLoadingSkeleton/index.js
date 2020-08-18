import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { Grid, FlexContainer } from './styles'

export const GridLoadingSkeleton = ({ count }) => {
  const renderGridLoadingSkeleton = () => {
    const grids = []
    for (let i = 0; i < count; i++) {
      grids.push(
        <Grid key={`loading-grid-${i}`}>
          <Skeleton height={100} width={100} />
        </Grid>
      )
    }
    return grids
  }
  return (
    <>
      <FlexContainer>
        {renderGridLoadingSkeleton()}
      </FlexContainer>
    </>
  )
}
