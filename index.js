// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

//call fucntion  to fecth IP address
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});

//const exampleIP = '162.245.144.188';
const ip = '24.77.87.224';

//call function to fetch coordinates
fetchCoordsByIP(ip, (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned coordinates:', coordinates);
});

//const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
const coords = { latitude: '49.8997541', longitude: '-97.1374937' };

//call function to fetch passTimes
fetchISSFlyOverTimes(coords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned flyover times:', passTimes);
});