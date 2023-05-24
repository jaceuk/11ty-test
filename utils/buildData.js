const fs = require('fs');

let servicesData;
let placesData;

try {
  // reading a JSON file synchronously
  servicesData = fs.readFileSync('services.json');
  placesData = fs.readFileSync('places.json');
  reviewsData = fs.readFileSync('reviews.json');
} catch (error) {
  console.error(error);
  throw error;
}

// parsing the JSON content
const services = JSON.parse(servicesData);
const places = JSON.parse(placesData);
const reviews = JSON.parse(reviewsData);

// build template section
places.forEach((place, index) => {
  place.templates = {};

  services.forEach((service) => {
    // services have 2 templates by default
    if (service.templates === 2) {
      if (index % 2 === 0) return (place.templates[service.slug] = 2);
      place.templates[service.slug] = 1;
    }

    // power flushing has 9 templates so needs an exception
    if (service.templates === 9) {
      if (index % 9 === 1) return (place.templates[service.slug] = 2);
      if (index % 9 === 2) return (place.templates[service.slug] = 3);
      if (index % 9 === 3) return (place.templates[service.slug] = 4);
      if (index % 9 === 4) return (place.templates[service.slug] = 5);
      if (index % 9 === 5) return (place.templates[service.slug] = 6);
      if (index % 9 === 6) return (place.templates[service.slug] = 7);
      if (index % 9 === 7) return (place.templates[service.slug] = 8);
      if (index % 9 === 8) return (place.templates[service.slug] = 9);
      place.templates[service.slug] = 1;
    }
  });
});

// build reviews section
places.forEach((place) => {
  place.reviews = {};
  let filteredReviews = [];

  services.forEach((service) => {
    reviews.forEach((review) => {
      if (review.postcode === place.postcode) {
        filteredReviews.push(review);
      }
    });
    place.reviews[service.slug] = [filteredReviews];
  });
});

const placesJson = JSON.stringify(places);

// writing the JSON string content to a file
fs.writeFile('../_data/places.json', placesJson, (error) => {
  // throwing the error
  // in case of a writing problem
  if (error) {
    // logging the error
    console.error(error);
    throw error;
  }

  console.log('places.json written correctly');
});
