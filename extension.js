'use strict';

module.exports = function (nodecg) {

  var tmi = require("tmi.js");
  var strawpoll = require("strawpoll");

  var options = {
      options: {
        debug: true
      },
      connection: {
        cluster: "aws",
        reconnect: true
      },
      identity: {
        username: "PolarisOnBot",
        password: "oauth:kumua58wzdp50wpvef8p4c4wiaorja"
      },
      channels: ['PolarisBear']
  };

  var client = new tmi.client(options);
  client.connect();

  client.on('chat', function(channel, user, message, self) {
    if (message === "!rose") {
      console.log("C'est rose");
     };

    if (message === "!keur")
     client.action("PolarisBear", "Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm Kreygasm ");
  });



  function poll() {

  };

};
