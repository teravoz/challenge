const startEvents = require('./emit-event');

// starts sending events
startEvents(process.env.WEBHOOK);
