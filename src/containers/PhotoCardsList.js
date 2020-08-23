import { getPhotos } from '../HighOrderComponent/getPhotos'
import { PhotoCardsListComponent } from '../components/PhotoCardsList'

export const PhotoCardsList = getPhotos(PhotoCardsListComponent)
