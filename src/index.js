import Gameboard from './modules/Gameboard';

const playerBoard = Gameboard;
playerBoard.createShip('battleship', 4, [4, 5, 6, 7]);
// playerBoard.createShip('submarine', 3, [11, 12, 13]);
playerBoard.receiveAttack(4);
playerBoard.receiveAttack(7);
playerBoard.receiveAttack(6);
playerBoard.receiveAttack(5);
playerBoard.checkSunk();
console.log(playerBoard.props);
