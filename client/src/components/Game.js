import React from 'react';
import { Grid } from 'semantic-ui-react';
import Board from './Board';
import ScoreCard from './ScoreCard';

const styles = {
  fullHeight: { height: '100vh'},
  board: { backgroundColor: 'rgb(20, 137, 203)' },
  scores: { backgroundColor: 'rgb(23, 199, 194)' },
}

const Game = () => (
      <Grid>
        <Grid.Row>
          <Grid.Column
            width={12}
            style={{ ...styles.fullHeight, ...styles.board}}
          >
            <Board />
          </Grid.Column>
          <Grid.Column
            width={4}
            style={{ ...styles.fullHeight, ...styles.scores}}
          >
            <ScoreCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )

export default Game;
