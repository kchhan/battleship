import Ship from '../modules/Ship';

describe('Testing Ship length property', () => {
  test('matches if prop has expected value', () => {
    const ship = Ship('patrol boat', 2, [1, 2]);
    expect(ship.props.length).toBe(2);
  });
  test('does not match if does not contain expected value', () => {
    const ship = Ship('submarine', 3, [3, 4, 5]);
    expect(ship.props.length).not.toBe(4);
  });
});

describe('Testing Ship location property', () => {
  test('matches if location is same as expected', () => {
    const ship = Ship('submarine', 3, [3, 4, 5]);
    expect(ship.props.location).toMatchObject([3, 4, 5]);
  });
  test('does not match if location set is different from expected', () => {
    const ship = Ship('submarine', 3, [3, 4, 5]);
    expect(ship.props.location).not.toEqual([14, 15, 16]);
  });
});

describe('Testing Ship hit property', () => {
  test('Ship hit at X location', () => {
    const cruiser = Ship('cruiser', 3, [2, 3, 4]);
    cruiser.hit(3);
    expect(cruiser.props.hit).toContain(3);
  });
});

describe('Testing Ship sunk property', () => {
  test('if location and hit prop matches isSunk is true', () => {
    const patrol = Ship('patrol boat', 2, [11, 12]);
    // out of order shots
    patrol.hit(12);
    patrol.hit(11);
    patrol.isSunk();
    expect(patrol.props.sunk).toBe(true);
  });
});
