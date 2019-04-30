import build from '../src/js/builder';

const testDate = [
  ['A8', ['C7', 'B6']],
  ['D4', ['C6', 'B5', 'B3', 'C2', 'E6', 'F5', 'F3', 'E2']],
];

test.each(testDate)(
  'builder(%s, %o)',
  (coord, expected) => {
    expect(build(coord).join(', ')).toBe(expected.join(', '));
  },
);
