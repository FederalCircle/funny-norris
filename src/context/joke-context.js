import React from 'react'

const JokeContext = React.createContext()

export const JokeProvider = ({ children }) => {
  const [joke, setJoke] = React.useState(null)

  const [fetchingJoke, setFethingJoke] = React.useState(false)

  const setCategory = category => {
    setJoke(currState => ({ ...currState, category }))
  }

  const updateJoke = async () => {
    setFethingJoke(true)

    setTimeout(() => {
      setJoke(currState => ({
        ...currState,
        text: 'Foo bar baz'
      }))
      setFethingJoke(false)
      Promise.resolve()
    }, 1000)
  }

  const resetJoke = category => {
    setJoke(null)
  }
  return (
    <JokeContext.Provider
      value={{ joke, fetchingJoke, setCategory, resetJoke, updateJoke }}
    >
      {children}
    </JokeContext.Provider>
  )
}

export const useJoke = () => React.useContext(JokeContext)
