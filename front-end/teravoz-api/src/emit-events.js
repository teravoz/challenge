const request = require('request');
const EventStream = require('./event-stream');

/**
  Sends call events to the URL 'webhook'
*/
module.exports = function emitEvents(webhook, peerNumber) {
  let events = EventStream.create(peerNumber);
  postNextEvent(events, webhook);
}

function postNextEvent(events, webhook) {
  let nextEvent = events.next();

  console.info(`POSTing event `, nextEvent);
  request.post({
    url: webhook,
    json: nextEvent
  })
  .on('response', (response) => {
    console.log(`POST status code response is ${response.statusCode}`);
  })
  .on('error', (err) => {
    console.error('ERROR_CODE:', err.code);
    console.error('ERROR_MSG:', err.message);
    console.error('ERROR:', err);
  });

  if (events.hasNext()) {
    // Another event within 'gap' milliseconds
    setTimeout(() => {
      postNextEvent(events, webhook);
    }, events.gap());
  }
}
