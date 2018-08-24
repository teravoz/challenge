const request = require('request');
const events = require('./events');

module.exports = function emitEvent(webhook, i=0) {
  console.info(`Emitting event `, events[i]);
  request.post({
    url: webhook,
    json: events[i]
  })
  .on('response', (response) => {
    if (response.statusCode == 200) {
      console.log(`INFO: POST status code response is ${response.statusCode}`);
    } else {
      console.warn(`WARN: POST status code response is ${response.statusCode}`);
    }
  })
  .on('error', (err) => {
    console.error('ERROR:', err.message);
  });

  // Sends another burst of events every 5 seconds
  setTimeout(() => {
    ++i;
    for (var j = 0; j < (i+1)*1000; j++) {
      emitEvent(webhook, i);
    }
  }, 5000);
}
