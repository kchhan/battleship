import Ship from './Ship';

const Gameboard = () => {
  const props = {
    shipsLeft: 5,
    ships: [],
    missedShots: [],
    gameover: false,
  };

  const createShip = (length, location) => {
    const ship = Ship(length, location);
    return props.ships.push(ship);
  };

  const receiveAttack = coordinate => {
    let hit = false;
    props.ships.forEach(obj => {
      if (obj.props.location.includes(coordinate)) {
        obj.props.hit.push(coordinate);
        hit = true;
      }
    });
    if (!hit) {
      props.missedShots.push(coordinate);
    }
    // returns a response for updateGrid
    return !hit ? 'miss' : 'hit';
  };

  const checkSunk = () => {
    // should filter out already sunk ships so not counted twice
    const filteredShips = props.ships.filter(ship => {
      if (!ship.props.sunk) {
        return ship;
      }
    });

    filteredShips.forEach(obj => {
      // then checks for sunk ships from current move
      obj.isSunk();
      if (obj.props.sunk) {
        props.shipsLeft--;
      }
    });
    // if no ships are left then it is gameover and there is a winner
    if (props.shipsLeft === 0) {
      return (props.gameover = true);
    }
  };

  const clearGameboard = () => {
    props.shipsLeft = 5;
    props.ships = [];
    props.missedShots = [];
    props.gameover = false;
  };

  return { props, createShip, receiveAttack, checkSunk, clearGameboard };
};

export default Gameboard;
