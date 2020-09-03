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
  const userMove = (coordinate) => {
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

  // randomly chosen predetermined ship coordinates
  const generateShips = () => {
    const userId = Math.floor(Math.random() * 3) + 1;
    const computerId = Math.floor(Math.random() * 3) + 1;

    const userArr = [
      {
        id: 1,
        length: [5, 4, 3, 3, 2],
        coordinates: [
          [37, 47, 57, 67, 77],
          [14, 15, 16, 17],
          [53, 63, 73],
          [88, 89, 90],
          [21, 31],
        ],
      },
      {
        id: 2,
        length: [5, 4, 3, 3, 2],
        coordinates: [
          [81, 82, 83, 84, 85],
          [29, 39, 49, 59],
          [77, 87, 97],
          [12, 13, 14],
          [7, 17],
        ],
      },
      {
        id: 3,
        length: [5, 4, 3, 3, 2],
        coordinates: [
          [56, 57, 58, 59, 60],
          [71, 72, 73, 74],
          [19, 29, 39],
          [12, 22, 32],
          [99, 100],
        ],
      },
    ];

    const computerArr = [
      {
        id: 1,
        length: [5, 4, 3, 3, 2],
        coordinates: [
          [12, 13, 14, 15, 16],
          [95, 96, 97, 98],
          [35, 45, 55],
          [61, 71, 81],
          [49, 50],
        ],
      },
      {
        id: 2,
        length: [5, 4, 3, 3, 2],
        coordinates: [
          [60, 70, 80, 90, 100],
          [13, 23, 33, 43],
          [58, 59, 60],
          [45, 55, 65],
          [28, 29],
        ],
      },
      {
        id: 3,
        length: [5, 4, 3, 3, 2],
        coordinates: [
          [8, 18, 28, 38, 48],
          [64, 65, 66, 67],
          [91, 92, 93],
          [12, 22, 32],
          [79, 89],
        ],
      },
    ];

    userArr.forEach((obj) => {
      if (userId === obj.id) {
        for (let i = 0; i < 5; i++) {
          userBoard.createShip(obj.length[i], obj.coordinates[i]);
        }
      }
    });

    computerArr.forEach((obj) => {
      if (computerId === obj.id) {
        for (let i = 0; i < 5; i++) {
          computerBoard.createShip(obj.length[i], obj.coordinates[i]);
        }
      }
    });
  };

  const renderShips = () => {
    UI.renderUserShips(userBoard.props.ships);
  };

  const clearBoard = () => {
    UI.clearBoard();
  };

  // winner is determined in playGame
  const gameover = (winner) => {
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
      resetGame();
    },
  };
})(UI, Player, Gameboard);

App.init();
