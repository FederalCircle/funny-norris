import React from 'react'
import styled from 'styled-components'
// Material-UI
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// Others
import { useJoke } from '../context/joke-context'
import cardPositions from '../constants/cards-positions'

const Wrapper = styled(Grid).attrs({
  container: true,
  justify: 'center',
  alignItems: 'center'
})`
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 300ms ease-out;

  &.center {
    transform: ${props => cardPositions[props['transition-index']]};
  }

  &.selected {
    z-index: 2;
  }
`
const Card = styled(Paper)`
  width: 6rem;
  height: 6rem;
  display: flex;
  position: absolute;
  transition: all 300ms ease-out;

  .selected & {
    width: 15rem;
    height: 15rem;
  }
`

const CardHeader = styled(Grid).attrs({
  container: true,
  justify: 'center',
  alignItems: 'center'
})`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.light};
  transition: height 300ms ease-out;
  border-radius: 4px;

  &.collapsed {
    height: 2rem;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
`

const CardBody = styled(Grid).attrs({
  container: true,
  justify: 'center',
  alignItems: 'center'
})`
  margin-top: 2rem;
`

const JokeCard = ({ category, positionIndex }) => {
  const { joke, fetchingJoke, setCategory } = useJoke()

  const showingJoke = Boolean(joke)
  const isSelected = Boolean(joke && joke.category === category)

  const wrapperClasses = []
  if (showingJoke) wrapperClasses.push('center')
  if (isSelected) wrapperClasses.push('selected')

  const headerClasses = []
  if (isSelected && !fetchingJoke) headerClasses.push('collapsed')

  return (
    <Wrapper
      className={wrapperClasses.join(' ')}
      transition-index={positionIndex}
    >
      <Card
        onClick={() => setCategory(category)}
        elevation={isSelected ? 6 : 2}
      >
        <CardHeader className={headerClasses.join(' ')}>
          <Typography>{category}</Typography>
        </CardHeader>
        {isSelected ? (
          <CardBody>
            <Typography>{joke.text}</Typography>
          </CardBody>
        ) : null}
      </Card>
    </Wrapper>
  )
}

export default JokeCard
