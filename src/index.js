import Player from './modules/Player';
import Gameboard from './modules/Gameboard';
import UI from './modules/UI';

const App = (UI => {
  const user = Player();
  const computer = Player();
  const userBoard = Gameboard();
  const computerBoard = Gameboard();

  const loadEventListeners = () => {
    const UISelectors = UI.getSelectors();

    document
      .querySelector(UISelectors.computerGrid)
      .addEventListener('click', playGame);

    document
      .querySelector(UISelectors.resetBtn)
      .addEventListener('click', resetGame);
  };

  const playGame = e => {
    if (e.target.className.includes('grid-item')) {
      console.log(e.target.id);
    }

    const coordinate = e.target.id;

    if (!userBoard.props.gameover || !computerBoard.props.gameover) {
      userMove(Number(coordinate));
      setTimeout(computerMove, 100);
    }
  };

  const userMove = coordinate => {
    user.userMove(coordinate);
    computerBoard.receiveAttack(coordinate);
    computerBoard.checkSunk();
  };

  const computerMove = () => {
    const coordinate = computer.randomMove();
    userBoard.receiveAttack(coordinate);
  };

  const newGame = () => {
    clearBoard();
    renderBoards();
    generateShips();
    renderShips();
    loadEventListeners();
  };

  const renderBoards = () => {
    UI.renderGrid('user-grid');
    UI.renderGrid('computer-grid');
  };

  const generateShips = () => {
    userBoard.createShip('carrier', 5, [37, 47, 57, 67, 77]);
    userBoard.createShip('battleship', 4, [14, 15, 16, 17]);
    userBoard.createShip('cruiser', 3, [53, 63, 73]);
    userBoard.createShip('submarine', 3, [88, 89, 90]);
    userBoard.createShip('destroyer', 2, [21, 31]);

    computerBoard.createShip('carrier', 5, [12, 13, 14, 15, 16]);
    computerBoard.createShip('battleship', 4, [95, 96, 97, 98]);
    computerBoard.createShip('cruiser', 3, [35, 45, 55]);
    computerBoard.createShip('submarine', 3, [61, 71, 81]);
    computerBoard.createShip('destroyer', 2, [49, 50]);
  };

  const renderShips = () => {};

  const clearBoard = () => {};

  const resetGame = () => {
    user.moves = [];
    computer.moves = [];
  };

  return {
    init() {
      newGame();
    },
  };
})(UI);

App.init();
