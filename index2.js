const {nextISSTimesForMyLocation} = require("./iss_promised");

const printPassTimes = function(passTimes) {
  passTimes.forEach(element => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(element.risetime);
    let msg = `Next pass at ${datetime} for ${element.duration} seconds!`;
    console.log(msg);
  });
};

nextISSTimesForMyLocation()
  .then(body => printPassTimes(body))
  .catch(error => console.log("It didn't work: ", error.message));