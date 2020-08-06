const UI = (() => {
  const UISelectors = {
    container: '#container',
    userGrid: '#user-grid',
    computerGrid: '#computer-grid',
    resetBtn: '#reset-button',
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
        cell.textContent = i + 1;
        grid.appendChild(cell);
      }

      $(UISelectors.container).appendChild(grid);
    },

    renderUserShips(shipList) {
      const grid = $(UISelectors.userGrid);
      shipList.forEach(ship => {
        ship.props.location.forEach(cell => {
          grid.children[cell - 1].classList.add('ship');
        });
      });
    },

    missShip() {},

    hitShip() {},

    sinkShip() {},

    clearBoard() {
      $(UISelectors.container).innerHTML = '';
    },

    getSelectors() {
      return UISelectors;
    },
  };
})();

export default UI;
