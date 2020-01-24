import React from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import JokeCard from './JokeCard'
import JokeActions from './JokeActions'

const Wrapper = styled(Grid)`
  padding: 1rem;
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
  const categories = ['animal', 'career', 'celebrity', 'dev', 'fashion', 'food']
  return (
    <Wrapper container direction="column">
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
