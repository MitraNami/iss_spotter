const {fetchMyIp, fetchCoordsByIp, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require("./iss");

// fetchMyIp((err, ip) => {
//   if (err) {
//     console.log("It didn't work!", err);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });


// fetchCoordsByIp("67.1.28", (err, coords) => {
//   if (err) {
//     console.log("It didn't work!", err);
//     return;
//   }
  
//   console.log("Geo coord: ", coords);
// });


// fetchISSFlyOverTimes({ latitude: '-10', longitude: '-123.13000' }, (err, passTimes) => {
//   if (err) {
//     console.log("It didn't work!", err);
//     return;
//   }

//   console.log("It worked! Returned flyover times: ", passTimes);
// });



/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */


const printPassTimes = function(passTimes) {
  passTimes.forEach(element => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(element.risetime);
    let msg = `Next pass at ${datetime} for ${element.duration} seconds!`;
    console.log(msg);
  });
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});

