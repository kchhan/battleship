import Ship from './Ship';

const Gameboard = () => {
  const props = {
    shipsLeft: 5,
    ships: [],
    missedShots: [],
    gameover: false,
  };

  const createShip = (name, length, location) => {
    const ship = Ship(name, length, location);
    return props.ships.push(ship);
  };

  const receiveAttack = coordinate => {
    let missed = false;
    props.ships.forEach(obj => {
      if (obj.props.location.includes(coordinate)) {
        obj.props.hit.push(coordinate);
        missed = true;
      }
    });
    if (!missed) {
      props.missedShots.push(coordinate);
    }
    return !missed ? 'miss' : 'hit';
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
    if (props.shipsLeft === 0) {
      return (props.gameover = true);
    }
  };

  return { props, createShip, receiveAttack, checkSunk };
};

export default Gameboard;
