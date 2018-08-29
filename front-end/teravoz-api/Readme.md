# teravoz-api

Basic simulator for Teravoz API.

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

Usage
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