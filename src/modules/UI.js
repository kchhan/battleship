const UI = (() => {
  const UISelectors = {
    container: '#container',
    userGrid: '#user-grid',
    computerGrid: '#computer-grid',
    resetBtn: '#reset-button',
    announcement: '#announcement',
  };

  // for brevity
  const $ = element => {
    return document.querySelector(element);
  };

  // game traditionally 10x10
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

    // rendering only the user's ships as per normal game rules
    renderUserShips(shipList) {
      const grid = $(UISelectors.userGrid);
      shipList.forEach(ship => {
        ship.props.location.forEach(cell => {
          grid.children[cell - 1].classList.add('ship');
        });
      });
    },

    // adds a miss or hit class to the grid-item to change its color
    updateGrid(player, coordinate, response) {
      switch (player) {
        case 'user':
          $(UISelectors.userGrid).children[coordinate - 1].classList.add(
            response
          );
          break;
        case 'computer':
          $(UISelectors.computerGrid).children[coordinate - 1].classList.add(
            response
          );
          break;
      }
    },

    // if ship is sunk it will turn red
    updateSunk(player, shipList) {
      switch (player) {
        case 'user':
          shipList.forEach(ship => {
            if (ship.props.sunk) {
              ship.props.location.forEach(location => {
                $(UISelectors.userGrid).children[location - 1].classList.remove(
                  'hit'
                );
                $(UISelectors.userGrid).children[location - 1].classList.add(
                  'sunk'
                );
              });
            }
          });
          break;
        case 'computer':
          shipList.forEach(ship => {
            if (ship.props.sunk) {
              ship.props.location.forEach(location => {
                $(UISelectors.computerGrid).children[
                  location - 1
                ].classList.remove('hit');
                $(UISelectors.computerGrid).children[
                  location - 1
                ].classList.add('sunk');
              });
            }
          });
          break;
      }
    },

    announceWinner(winner) {
      let text = '';
      switch (winner) {
        case 'user':
          text += 'YOU WIN';
          break;
        case 'computer':
          text += 'COMPUTER WINS';
          break;
      }
      $(UISelectors.announcement).textContent = text;
    },

    clearAnnouncement() {
      $(UISelectors.announcement).innerHTML = '';
    },

    clearBoard() {
      $(UISelectors.container).innerHTML = '';
    },

    getSelectors() {
      return UISelectors;
    },
  };
})();

export default UI;
