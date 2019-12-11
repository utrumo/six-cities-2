import {getNormalizedRating, getRatingInPercent, Rating} from './rating-to-percent.js';

describe(`getNormalizedRating`, () => {
  it(`Should return min value`, () => {
    const rating = -0.4;
    const normalizedRating = getNormalizedRating(rating);
    expect(normalizedRating === Rating.MIN_VALUE).toBeTruthy();
  });

  it(`Should return max value`, () => {
    const rating = 6.4;
    expect(getNormalizedRating(rating)).toEqual(Rating.MAX_VALUE);
  });

  it(`Should return roundedValue value`, () => {
    expect(getNormalizedRating(3.3)).toEqual(3);
    expect(getNormalizedRating(3.7)).toEqual(4);
  });
});

it(`Should return rating in percent`, () => {
  expect(getRatingInPercent(0)).toEqual(0);
  expect(getRatingInPercent(2.5)).toEqual(60);
  expect(getRatingInPercent(5)).toEqual(100);
});
