import Player from '../modules/Player';

describe('computer can make a random move', () => {
  test('a random move is between 1 and 100', () => {
    expect(Player.randomMove()).toBeLessThanOrEqual(100);
  });
  test('a random move is not over 100', () => {
    expect(Player.randomMove()).not.toBeGreaterThan(100);
  });
});

describe('user can attack the opponent', () => {
  test('user can choose a grid number to attack', () => {
    Player.userAttack(10);
    expect(Player.userMoves).toContain(10);
  });
});
