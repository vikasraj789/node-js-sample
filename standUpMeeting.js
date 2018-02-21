#! /app/.heroku/node/bin/node
var PushBullet = require('pushbullet');
var pusher = new PushBullet('o.oQTUaHkuQOTNCm016FR6otSRXIYX3XsE');

pusher.devices((err, res) => {
  if (res) {
    var devices = res.devices;
    var deviceIds = [];
    devices.forEach(function (device) {
      pusher.note(device.iden, 'Meeting in few minutes', 'Stand up meeting', function (err, res) {
        process.exit();
      })
    });
  }
  if (err) {
    process.exit();
  }
});
console.log('hello')