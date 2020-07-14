import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    window.fetch('https://petgram-server.zearkiatos.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

export const CategoriesList = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoriesData()
  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderLoadingList = (quantity = 5) => {
    const items = []
    for (let i = 0; i < quantity; i++) {
      const item = (<Item key={`skeleton-${i}`}>
        <Skeleton circle width={75} height={75} />
                    </Item>)
      items.push(item)
    }

    return (<List>
      {
        items.map(item => {
          return item
        })
      }
            </List>)
  }

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {
          categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
        }

      </List>
    )
  }
  if (loading) { return renderLoadingList() }
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
