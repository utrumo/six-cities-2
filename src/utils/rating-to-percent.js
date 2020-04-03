const Rating = {
  MIN_VALUE: 0,
  MAX_VALUE: 5,
};
const HUNDRED_PERCENT = 100;
const ONE_PERCENT_OF_MAX_RATING = Rating.MAX_VALUE / HUNDRED_PERCENT;

const getNormalizedRating = (rating) => {
  const {MIN_VALUE, MAX_VALUE} = Rating;
  const roundedValue = Math.round(rating);

  if (roundedValue < MIN_VALUE) {
    return MIN_VALUE;
  } else if (roundedValue > MAX_VALUE) {
    return MAX_VALUE;
  }

  return roundedValue;
};

const getRatingInPercent = (rating) => {
  return getNormalizedRating(rating) / ONE_PERCENT_OF_MAX_RATING;
};

export {getNormalizedRating, getRatingInPercent, Rating};
