import React from 'react';
import Dice from './Dice';
import { Grid, Button, Divider, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { rollDice } from '../actions/currentGame';

const Board = ({ roll, dice, keep, dispatch }) => {

  return (
    <Container>
    <Grid>
      <Grid.Row>
        <Divider hidden />
        <Button size="big" fluid onClick={ () => dispatch(rollDice())}>
          Roll Dice
        </Button>
        <Grid.Column width={16}>
          <Divider />
        </Grid.Column>
        { roll > 0 && dice.map( (die, index) => {
          const kept = keep.includes(index);
          return(
            <Dice
              key={index}
              value={die}
              kept={kept}
              index={index}
            />
          )
        })
      }
      </Grid.Row>
    </Grid>
    </Container>
  )
}

const mapStateToProps = (state) => {
  let { dice, keep, roll } = state.currentGame;
  return { dice, keep, roll }
}

export default connect(mapStateToProps)(Board);
