const Player = () => {
  const moves = [];

  const randomMove = () => {
    const coordinate = Math.floor(Math.random() * 100);
    if(!moves.includes(coordinate)){
      moves.push(coordinate)
      return coordinate;
    }
    return randomMove();
  };

  const userMove = coordinate => {
    if (!moves.includes(coordinate)) {
      moves.push(coordinate);
      return coordinate;
    }
  };

  return { moves, randomMove, userMove };
};

export default Player;
