require("dotenv").config();
//importing request module
const request = require("request");
//declaring func to get data
const getData = (address, callback) => {
  //setting url
  const url =
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.KEY}&q=` +
    encodeURIComponent(address) +
    "&aqi=yes&days=4";
  request({ url, json: true }, (error, response) => {
    //here check for error
    if (error) {
      // error occured
      const error = { error: 001 };
      const errorJSON = JSON.stringify(error);
      callback(undefined, (data = errorJSON));
    }

    callback(undefined, (data = response.body));
  });
};
module.exports = getData;
