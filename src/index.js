import Player from './modules/Player';
import Gameboard from './modules/Gameboard';
import UI from './modules/UI';

const App = (() => {
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

  const playGame = (e, coordinate) => {
    if (e.target.classList.contains('grid-item')) {
      coordinate = Number(e.target.id);
    }

    if (!userBoard.props.gameover || !computerBoard.props.gameover) {
      userMove(coordinate);
      setTimeout(computerMove, 100);
    } else {
      console.log('gameover');
    }
  };

  const userMove = coordinate => {
    if (!user.moves.includes(coordinate)) {
      user.userMove(coordinate);
      console.log(coordinate);
      computerBoard.receiveAttack(coordinate);
      computerBoard.checkSunk();
    }
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

  const renderShips = () => {
    UI.renderUserShips(userBoard.props.ships);
  };

  const clearBoard = () => {
    UI.clearBoard();
  };

  const resetGame = () => {
    user.moves = [];
    computer.moves = [];

    newGame();
  };

  return {
    init() {
      newGame();
    },
  };
})(UI);

App.init();
