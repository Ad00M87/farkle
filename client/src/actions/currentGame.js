export const rollDice = () => {
  return (dispatch, getState) => {
    let { keep, dice } = getState().currentGame;
    let newDice = dice.map( (die, i) => {
      if (keep.includes(i))
        return die;
      return Math.floor(Math.random() * 6) + 1
    });
    dispatch({ type: 'ROLL_DICE', dice: newDice });
  }
}

export const toggleKept = (index) => {
  return (dispatch, getState) => {
    let { keep } = getState().currentGame;
    let newKeep;

    if (keep.includes(index))
      newKeep = keep.filter( k => k !== index )
    else
      newKeep = [...keep, index]

    dispatch({ type: 'TOGGLE_KEPT', keep: newKeep})
  }
}
