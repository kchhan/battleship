import Ship from '../modules/Ship';

describe('Testing Ship length property', () => {
  test('matches if prop has expected value', () => {
    expect(Ship.setLength(5)).toBe(5);
  });
  test('does not match if does not contain expected value', () => {
    expect(Ship.setLength(3)).not.toBe(4);
  });
});

describe('Testing Ship location property', () => {
  test('matches if location is same as expected', () => {
    expect(Ship.setLocation(['1', '2', '3', '4', '5'])).toEqual([
      '1',
      '2',
      '3',
      '4',
      '5',
    ]);
  });
  test('does not match if location set is different from expected', () => {
    expect(Ship.setLocation(['1', '2', '3', '4', '5'])).not.toEqual([
      '11',
      '12',
      '13',
      '14',
      '15',
    ]);
  });
});

describe('Testing Ship hit property', () => {
  test('Ship hit at X location', () => {
    const cruiser = Ship;
    cruiser.setLength(3);
    cruiser.setLocation([2,3,4]);
    cruiser.hit(3);
    expect(cruiser.props.hit).toContain(3);
  });
});

describe('Testing Ship sunk property', () => {
  test('if location and hit prop matches isSunk is true', () => {
    const patrol = Ship;
    patrol.setLength(2);
    patrol.setLocation([11,12]);
    patrol.hit(11);
    patrol.hit(12);
    patrol.isSunk();
    expect(patrol.props.sunk).toBe(true);
  });
});
