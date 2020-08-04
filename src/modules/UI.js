const UI = (() => {
  const UISelectors = {
    startBtn: '#start-button',
    container: '#container',
    userBoard: '#user-board',
    computerBoard: '#computer-board',
  };

  const $ = element => {
    return document.querySelector(element);
  };

  const rows = 10;
  const cols = 10;

  return {
    renderGrid(player) {
      const grid = document.createElement('div');
      grid.id = player;
      grid.classList.add('board');

      for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement('div');
        cell.id = i + 1;
        cell.classList.add('grid-item');
        cell.textContent = i+1;
        grid.appendChild(cell);
      }

      $(UISelectors.container).appendChild(grid)
    },

    getSelectors() {
      return UISelectors;
    },
  };
})();

export default UI;