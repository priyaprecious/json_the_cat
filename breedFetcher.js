const breed = require('request');
const breedName = process.argv.slice(2);



breed(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  if (body === '[]') {
    console.log('Error, this breed was not found');
    return;
  }
  if (error) {
    console.log(error[0]);
    return;
  }
  const data = JSON.parse(body);
  console.log(data[0]['description']);

});