import React from 'react'
import styled from 'styled-components'
import CSSTransition from 'react-transition-group/CSSTransition'
// Material-UI
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// Others
import { useJoke } from '../context/joke-context'

const Wrapper = styled(Grid).attrs({
  container: true,
  direction: 'column',
  spacing: 2,
  alignItems: 'center'
})`
  position: fixed;
  width: 100%;
  right: 0;
  bottom: 1rem;
  transition: opacity 300ms ease-out;
  opacity: 0;

  &.enter-done {
    opacity: 1;
  }
`

const JokeCard = () => {
  const { joke, updateJoke, resetJoke } = useJoke()

  const showingJoke = Boolean(joke)

  return (
    <CSSTransition in={showingJoke} timeout={300} unmountOnExit>
      <Wrapper>
        <Grid item onClick={updateJoke}>
          <Button>Carregar outra</Button>
        </Grid>
        <Grid item onClick={resetJoke}>
          <Button>Retornar</Button>
        </Grid>
      </Wrapper>
    </CSSTransition>
  )
}

export default JokeCard
