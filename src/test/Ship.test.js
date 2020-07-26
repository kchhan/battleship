import Ship from '../modules/Ship';

describe('Testing Ship functions', () => {
  test('Ship contains a setable prop length', () => {
    expect(Ship.setLength(5)).toBe(5);
  });
});
