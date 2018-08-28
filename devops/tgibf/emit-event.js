const request = require('request');
const events = require('./events');

// Sends increasing bursts of events
module.exports = function startEvents(webhook, i=0) {
  ++i;
  let total = i*1000;
  let sent = 0;
  let errored = false;
  console.log(`Gonna emit ${total} events`);
  for (var j = 0; j < total; j++) {
    emitEvent(webhook, (err) => {
      if (err) {
        errored = true;
      }
      ++sent;
      if (sent == total) {
        console.info(`Emitted ${total} events`);
        if (errored) {
          console.error(`Got error on i = ${i}, setting i=i-2 to keep pressure`);
          i = i-2;
        }
        setTimeout(() => {
          startEvents(webhook, i);
        }, 2000);
      }
    });
  }
}

function emitEvent(webhook, callback) {
  // random event
  let i = Math.floor(Math.random() * 40);

  console.info(`Emitting event `, events[i]);
  request.post({
    url: webhook,
    json: events[i]
  })
  .on('response', (response) => {
    if (response.statusCode == 200) {
      console.log(`INFO: POST status code response is ${response.statusCode} for events[i] = `, events);
    } else {
      console.warn(`WARN: POST status code response is ${response.statusCode} for events[i] = `, events);
    }
    callback(null);
  })
  .on('error', (err) => {
    console.error('ERROR_CODE:', err.code);
    console.error('ERROR_MSG:', err.message);
    console.error('ERRORED_EVENT:', events[i]);
    console.error('ERROR:', err);
    callback(err);
  });
}
