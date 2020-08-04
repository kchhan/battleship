import Player from '../modules/Player';

describe('computer can make a random move', () => {
  test('a random move is between 1 and 100', () => {
    const cpu = Player();
    cpu.randomMove();
    expect(cpu.moves).toHaveLength(1);
  });
  test('if random moves is repeated > 100 times there should still be less than or equal to 100 items in moves', () => {
    const cpu = Player();
    for (let i = 0; i < 100; i++) {
      cpu.randomMove();
    }
    expect(cpu.moves).not.toHaveLength(101);
  });
});

describe('user can attack the opponent', () => {
  test('user can choose a grid number to attack', () => {
    const user = Player();
    user.userMove(10);
    expect(user.moves).toContain(10);
  });
});
