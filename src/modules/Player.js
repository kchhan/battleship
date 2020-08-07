const Player = () => {
  // to keep track of played moves
  let moves = [];

  // computer randomly chooses a number between 1 and 100 to play
  const randomMove = () => {
    const coordinate = Math.floor(Math.random() * 100 + 1);
    if (!moves.includes(coordinate)) {
      moves.push(coordinate);
      return coordinate;
    }

    return randomMove();
  };

  // the user specifies a move
  const userMove = coordinate => {
    if (!moves.includes(coordinate)) {
      moves.push(coordinate);
      return coordinate;
    }
  };

  const clearMoves = () => {
    return (moves = []);
  };

  return { moves, randomMove, userMove, clearMoves };
};

export default Player;
