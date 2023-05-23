// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

//call fucntion  to fecth IP address
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

//call function to fetch coordinates
fetchCoordsByIP('24.77.87.224', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', coordinates);
});