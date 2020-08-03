import Ship from '../modules/Ship';

const Gameboard = (() => {
  const props = {
    shipsLeft: 5,
    ships: [],
    missedShots: [],
  };

  const createShip = (name, length, location) => {
    const ship = Ship;
    ship.props.name = name;
    ship.setLength(length);
    ship.setLocation(location);
    return props.ships.push(ship);
  };

  const receiveAttack = coordinate => {
    props.ships.forEach(obj => {
      if (obj.props.location.includes(coordinate)) {
        return obj.props.hit.push(coordinate);
      }
      return props.missedShots.push(coordinate);
    });
  };

  const checkSunk = () => {
    props.ships.forEach(obj => {
      obj.isSunk();
      if (obj.props.sunk) {
        props.shipsLeft--;
      }
    });
    if ((props.shipsLeft = 0)) {
      return 'gameover';
    }
  };

  return { props, createShip, receiveAttack, checkSunk };
})();

export default Gameboard;
