const breed = require('request');
// const breedName = process.argv.slice(2);



// breed(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
//   if (body === '[]') {
//     console.log('Error, this breed was not found');
//     return;
//   }
//   if (error) {
//     console.log(error[0]);
//     return;
//   }
//   const data = JSON.parse(body);
//   console.log(data[0]['description']);

// });

const fetchBreedDescription = (breedName, callback) => {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=';
  
  request(url + breedName , (error, response, body) => {
    if (error) {
      callback(error,null);
    } else {
      const data = JSON.parse(body);
      error = data.length > 0 ? null : "Breed Not FOUND.";
      const description = data.length > 0 ? data[0].description : null;
      callback(error,description);
    }
  });
};
  
module.exports = {fetchBreedDescription};