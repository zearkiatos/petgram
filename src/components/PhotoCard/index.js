import React, { useEffect, useRef, useState } from 'react'
import { ImageWrapper, Image, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (e) {
      return false
    }
  })
  console.log(liked)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/details/${id}`}>
            <ImageWrapper>
              <Image src={src} />
            </ImageWrapper>
          </a>
          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32' /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
