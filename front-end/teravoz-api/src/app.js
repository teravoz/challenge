const app = require('express')();
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const emitEvents = require('./emit-events');
const peers = require('./peers');

const WEBHOOK = process.env.WEBHOOK || 'http://localhost/webhook';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
  POST /actions
  Body example:
  {
    "type": "dialer",
    "numbers": [ "5511999998888" ],
    "destination": "100",
    "destination_type": "peer",
    "code": "peer-100",
    "retries": "1",
    "retry_gap": "10s",
    "ttl": "5m"
  }
*/
app.post('/actions', (req, res) => {
  const event = req.body;
  console.info('POST: got action', req.body);
  if (event.destination) {
    emitEvents(WEBHOOK, event.destination);
    res.json({ status: 'ok' });
  } else {
    res.status(400).json({
      error: 'destination is required'
    });
  }
});

/**
  GET /peers
*/
app.get('/peers', (req, res) => {
  console.info('GET: retrieving peers');
  res.json(peers);
});

http.listen(3334, function(){
  console.info('Listening on *:3334');
});