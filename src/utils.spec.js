import { formatDate } from './utils';

describe('formatDate', () => {
  it('formats dates from numeric string to human-readable', () => {
    const actual = formatDate('2022-05-11');
    expect(actual).toEqual('May 11, 2022');
  });
});
