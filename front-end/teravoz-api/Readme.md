# teravoz-api

Basic simulator for Teravoz API.

Listens to GET on `/peers` endpoint and POST on `/actions`. After receiving a POST, starts emitting events `call.new`, `call.waiting`, `actor.entered`, `call.ongoing`, `actor.left`, `call.finished` in that order, with a random time gap between each event.

Those events are according to Teravoz API documentation [here](https://developers.teravoz.com.br/).

## Requirements

Node.js 8+

## Usage

Install dependencies
```
npm install
```

Run
```
WEBHOOK="http://localhost/webhook" npm start
```

Use
```
curl \
  -X POST \
  -H 'Content-type: application/json' \
  -d '{
    "type": "dialer",
    "numbers": [ "5511999998888" ],
    "destination": "100",
    "destination_type": "peer",
    "code": "happy-peer-100",
    "retries": "1",
    "retry_gap": "10s",
    "ttl": "5m"
  }' http://localhost:3334/actions
```