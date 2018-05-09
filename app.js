const request = require('request');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');


request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyARKIWwWOisD2BirVI0-L7o7zNgMSSZNKk',
  json: true
}, function (error, response, body) {
  console.log(JSON.stringify(body, undefined, 2));
});
