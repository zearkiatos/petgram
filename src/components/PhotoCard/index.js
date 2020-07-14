import React, { useEffect, useRef, useState, Fragment } from 'react'
import { ImageWrapper, Image, Button, Article } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.info('Intersectiing')
        setShow(true)
        observer.disconnect()
      }
    })
    observer.observe(ref.current)
  }, [ref])
  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/details/${id}`}>
            <ImageWrapper>
              <Image src={src} />
            </ImageWrapper>
          </a>
          <Button>
            <MdFavoriteBorder size='32' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
