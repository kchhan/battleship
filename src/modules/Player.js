const Player = (() => {
  const computerMoves = [];
  const userMoves = [];

  const randomMove = () => {
    const coordinate = Math.floor(Math.random() * 100);
    computerMoves.push(coordinate);
    return coordinate;
  };

  const userAttack = coordinate => {
    userMoves.push(coordinate);
  };
  return { computerMoves, userMoves, randomMove, userAttack };
})();

export default Player;
