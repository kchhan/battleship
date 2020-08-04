import Player from './modules/Player';
import Gameboard from './modules/Gameboard';
import UI from './modules/UI';

const App = ((UI) => {
  const loadEventListeners = () => {
    const UISelectors = UI.getSelectors();
  };

  const renderBoards = () => {
    UI.renderGrid('user');
    UI.renderGrid('computer') 
  };

  const clearBoard = () => {};

  const newGame = () => {
    const user = Player();
    const computer = Player();

    clearBoard();
    renderBoards();
    loadEventListeners();
  };

  return {
    init() {
      newGame();
    },
  };
})(UI);

App.init();
