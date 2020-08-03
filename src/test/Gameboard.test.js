import Gameboard from '../modules/Gameboard';

describe('Gameboard can place ships at a coorinate', () => {
  test('ship placed at X location', () => {
    const playerBoard = Gameboard();
    playerBoard.createShip('submarine', 3, [5, 6, 7]);
    expect(playerBoard.props.ships[0].props).toMatchObject({
      name: 'submarine',
      length: 3,
      location: [5, 6, 7],
    });
  });
});

describe('Gameboard can recieve attack from opponent', () => {
  test('takes coordinates and determines if a ship was hit or not', () => {
    const playerBoard = Gameboard();
    playerBoard.createShip('submarine', 3, [5, 6, 7]);
    playerBoard.receiveAttack(5);
    expect(playerBoard.props.ships[0].props.hit).toContain(5);
  });

  test('keeps track of missed shots', () => {
    const playerBoard = Gameboard();
    playerBoard.createShip('submarine', 3, [5, 6, 7]);
    playerBoard.receiveAttack(11);
    expect(playerBoard.props.missedShots).toContain(11);
  });
});

describe('Gameboard tracks number of ships remaining unsunk', () => {
  test('reports when all ships are sunk', () => {
    const playerBoard = Gameboard();
    playerBoard.props.shipsLeft = 1;
    playerBoard.createShip('patrol boat', 2, [2, 3]);
    playerBoard.receiveAttack(2);
    playerBoard.receiveAttack(3);
    playerBoard.checkSunk();
    expect(playerBoard.props.shipsLeft).toEqual(0);
  });
});
