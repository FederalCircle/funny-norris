import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import JokeCard from './JokeCard'
import JokeActions from './JokeActions'

import { useJoke } from '../context/joke-context'

const Wrapper = styled(Grid)`
  padding: 1rem;
  background-color: ${props => props['bg-color']};
  transition: background-color 300ms ease-out;
`

const Title = styled(Typography)`
  text-align: center;
  color: rgba(0, 0, 0, 0.3);
`

const JokeCardContainer = styled(Grid).attrs({
  item: true,
  xs: 6
})`
  position: relative;
`

const JokesCategories = () => {
  const { joke, categories } = useJoke()
  return (
    <Wrapper
      container
      direction="column"
      bg-color={joke && joke.colors.background}
    >
      <Grid item>
        <Title variant="h3">Funny Norris</Title>
      </Grid>
      <Grid item xs container>
        {categories.map((category, i) => (
          <JokeCardContainer key={i}>
            <JokeCard category={category} positionIndex={i} />
          </JokeCardContainer>
        ))}
      </Grid>
      <JokeActions />
    </Wrapper>
  )
}

export default JokesCategories
