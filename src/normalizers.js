export const releaseNormalize = value => {
  const releaseYear = value.slice(0, 4);
  return releaseYear;
};

export const ratingNormalize = value => {
  const voteRating = value * 10;
  return voteRating.toFixed(1) + '%';
};