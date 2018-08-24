const emitEvent = require('./emit-event');

// starts sending events
emitEvent(process.env.WEBHOOK);
