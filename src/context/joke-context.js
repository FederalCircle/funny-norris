import React from 'react'
import axios from 'axios'

import categoryColors from '../constants/category-colors'

const JokeContext = React.createContext()

export const JokeProvider = ({ children }) => {
  const [categories, setCategories] = React.useState([])

  const [joke, setJoke] = React.useState(null)

  const [fetchingJoke, setFethingJoke] = React.useState(false)

  React.useEffect(() => {
    ;(async () => {
      const response = await axios.get(
        'https://api.chucknorris.io/jokes/categories'
      )
      setCategories(response.data.slice(0, 6))
    })()
  }, [])

  const setCategory = category => {
    setJoke(currState => ({
      ...currState,
      category,
      colors: categoryColors[category]
    }))
    updateJoke(category)
  }

  const updateJoke = async category => {
    setFethingJoke(true)

    const query = (joke && joke.category) || category

    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${query}`
    )

    setFethingJoke(() => {
      setJoke(currState => ({
        ...currState,
        text: response.data.value
      }))
      return false
    })
  }

  const resetJoke = category => {
    setJoke(null)
  }

  return (
    <JokeContext.Provider
      value={{
        joke,
        categories,
        fetchingJoke,
        setCategory,
        resetJoke,
        updateJoke
      }}
    >
      {children}
    </JokeContext.Provider>
  )
}

export const useJoke = () => React.useContext(JokeContext)
