import sortHeroes from '../heroes';

test('main heroes test', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'всадник', health: 80 },
    { name: 'лекарь', health: 25 },
  ];
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'всадник', health: 80 },
    { name: 'лекарь', health: 25 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortHeroes(input)).toEqual(expected);
});
