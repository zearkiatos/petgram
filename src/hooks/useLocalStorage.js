
import { useState } from 'react'
export const useLocalStorage = (key, initialValue) => {
  const [storageValue, setStorageValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStorageValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storageValue, setLocalStorage]
}
