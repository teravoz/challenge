const BASE_EVENTS = require('./base-events');

module.exports.create = (peerNumber) => {
  let streamFn = function(peerNumber) {
    let currentIndex = 0;
    let callId = `${new Date().getTime()}.123`;
    let hasNext = true;

    // returns next event
    this.next = () => {
      let currentEvent = BASE_EVENTS[currentIndex];
      currentIndex++;

      // setting callId and timestamp
      currentEvent.call_id = callId;
      currentEvent.timestamp = new Date().toISOString();

      // setting peerNumber for actor
      if (currentEvent.type.startsWith('actor')) {
        currentEvent.number = peerNumber;
        currentEvent.actor = `${peerNumber}@teracompra.com`;
      }

      return currentEvent;
    }

    this.hasNext = () => {
      return currentIndex < BASE_EVENTS.length;
    }

    // time gap for next event
    this.gap = () => {
      // milliseconds between 1000 and 10000
      return (Math.floor(Math.random() * 10) + 1) * 1000;
    }
  }

  return new streamFn(peerNumber);
}
