import Player from './modules/Player';
import Gameboard from './modules/Gameboard';
import UI from './modules/UI';

const App = ((UI, Player, Gameboard) => {
  const user = Player();
  const computer = Player();
  const userBoard = Gameboard();
  const computerBoard = Gameboard();

  const loadEventListeners = () => {
    const UISelectors = UI.getSelectors();

    // computerGrid is the only playable area
    document
      .querySelector(UISelectors.computerGrid)
      .addEventListener('click', playGame);

    document
      .querySelector(UISelectors.resetBtn)
      .addEventListener('click', resetGame);
  };

  // user goes first and computer moves after
  const playGame = (e, coordinate) => {
    if (e.target.classList.contains('grid-item')) {
      coordinate = Number(e.target.id);
    }

    if (!userBoard.props.gameover && !computerBoard.props.gameover) {
      if (
        !e.target.classList.contains('hit') &&
        !e.target.classList.contains('miss') &&
        !e.target.classList.contains('sunk')
      ) {
        userMove(coordinate);
        setTimeout(computerMove, 100);
      }
    }
    if (userBoard.props.gameover) {
      gameover('computer');
    }
    if (computerBoard.props.gameover) {
      gameover('user');
    }
  };

  // first checks if valid move then updates UI;
  const userMove = coordinate => {
    if (!user.moves.includes(coordinate)) {
      user.userMove(coordinate);
      const response = computerBoard.receiveAttack(coordinate);
      computerBoard.checkSunk();
      UI.updateGrid('computer', coordinate, response);
      UI.updateSunk('computer', computerBoard.props.ships);
    }
  };

  const computerMove = () => {
    const coordinate = computer.randomMove();
    const response = userBoard.receiveAttack(coordinate);
    userBoard.checkSunk();
    UI.updateGrid('user', coordinate, response);
    UI.updateSunk('user', userBoard.props.ships);
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

  // predetermined ship coordinates
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

  // winner is determined in playGame
  const gameover = winner => {
    UI.announceWinner(winner);
  };

  // resets both Players and Gameboards
  const resetGame = () => {
    user.clearMoves();
    userBoard.clearGameboard();

    computer.clearMoves();
    computerBoard.clearGameboard();

    UI.clearAnnouncement();

    newGame();
  };

  return {
    init() {
      newGame();
    },
  };
})(UI, Player, Gameboard);

App.init();
