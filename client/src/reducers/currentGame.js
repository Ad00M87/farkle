const scores = [
  { section: 'running', name: 'Ones', score: null, value: 1 },
  { section: 'running', name: 'Fives', score: null, values: 5 },
  { section: 'running', name: 'Three Of A Kind', score: null },
  { section: 'running', name: 'Four Of A Kind', score: null },
  { section: 'running', name: 'Five Of A Kind', score: null },
  { section: 'running', name: 'Six Of A Kind', score: null },
  { section: 'running', name: 'Two Triples', score: null },
  { section: 'running', name: 'Three Doubles', score: null },
  { section: 'running', name: 'Four Of A Kind and Two Of A Kind', score: null },
  { section: 'running', name: 'Straight 1-6', score: null },
];

const currentGame = (
  state = { scores, roll: 0, dice: [...new Array(6)], keep: [] },
  action
) => {
  switch(action.type) {
    case 'RESET_ROLL':
      return {
        ...state,
        roll: 0,
        dice: [...new Array(6)],
        keep: []
      }
    case 'UPDATE_SCORES':
      return {
        ...state,
        scores: action.scores
      }
    case 'ROLL_DICE':
      return {
        ...state,
        dice: action.dice,
        roll: state.roll + 1
      }
    case 'TOGGLE_KEPT':
      return {
        ...state,
        keep: action.keep
      }
    default:
      return state;
  }
}

export default currentGame;
