// plumbing and heating
const plumbingKeywords = ['leak', 'tap', 'shower', 'bath', 'pump', 'overflow', 'water'];
const blockedKeywords = ['block', 'sink', 'basin', 'toilet'];
const heatingKeywords = ['heating', 'radiator'];
const boilerKeywords = ['boiler'];
const flushingKeywords = ['power', 'flush'];
const gutterKeywords = ['gutter'];
const patioKeywords = ['patio'];
const roofKeywords = ['roof'];

function filterReviews(data, keywords) {
  const reviews = data.reviews;
  let filteredReviews = [];
  reviews.forEach((review) => {
    const title = review.title.toLowerCase();

    keywords.forEach((keyword) => {
      if (title.includes(keyword)) {
        filteredReviews.push(review);
      }
    });
  });

  return filteredReviews;
}

module.exports = {
  plumbingReviews: (data) => {
    return filterReviews(data, plumbingKeywords);
  },
  blockedReviews: (data) => {
    return filterReviews(data, blockedKeywords);
  },
  heatingReviews: (data) => {
    return filterReviews(data, heatingKeywords);
  },
  boilerReviews: (data) => {
    return filterReviews(data, boilerKeywords);
  },
  flushingReviews: (data) => {
    return filterReviews(data, flushingKeywords);
  },
  gutterReviews: (data) => {
    return filterReviews(data, gutterKeywords);
  },
  patioReviews: (data) => {
    return filterReviews(data, patioKeywords);
  },
  roofReviews: (data) => {
    return filterReviews(data, roofKeywords);
  },
};
