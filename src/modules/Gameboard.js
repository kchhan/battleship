import Ship from './Ship';

const Gameboard = () => {
  const props = {
    shipsLeft: 5,
    ships: [],
    missedShots: [],
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
  };

  const checkSunk = () => {
    props.ships.forEach(obj => {
      obj.isSunk();
      if (obj.props.sunk) {
        props.shipsLeft--;
      }
    });
  };

  return { props, createShip, receiveAttack, checkSunk };
};

export default Gameboard;
