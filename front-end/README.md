# Front-end Challenge

You're applying to a Front-end position at Teravoz, and in this step we'll require you to accomplish at least one of the four tasks listed below.

Here we're trying to assess the following skills:

- Understanding and solving of a given problem
- Comprehensible code writing and organization
- Knowledge of HTML, CSS and JavaScript
- Use of React library and components
- Use of Node.js runtime and its libraries
- Intelligible and useful documentation writing, like READMEs and code comments
- Development practices like automated tests
- Comprehensible English writing

You can submit answers on a GitHub repository or gist, or by email if you require privacy or confidentiality. We'd like all documentation to be written in English, but if you're uncomfortable with it, it's OK to be in Portuguese.

## Tasks

**1. Proud of**

Share a little piece of code or even an entire application, in any programming language, that you developed and you're proud of, telling us why.

**2. Ashamed of**

Share a little piece of code or even an entire application, in any programming language, that you developed or saw and you're ashamed of (or secondhand embarrassed for), telling us why.

**3. Write an application for integrating with Teravoz API**

Suppose you work for the world famous e-commerce **Teracompra**, that already uses **Teravoz** as its telephony provider. Now your boss decided it is time to integrate with **Teravoz API**, in order to have more visibility and control over the call center operation.

As a starting point for this integration, your boss wants an application listing all call center operators, their respective status (_busy_ when they are answering the phone, _free_ otherwise) and a way to trigger calls for each _free_ operator.

Unfortunately, Teravoz doesn't have a _sandbox_ environment which you could use for interacting with, so a teammate of yours created `teravoz-api`, a simulator for Teravoz API, available [here](./teravoz-api). This is what it does:
- Listens to GET requests on endpoint `/peers`, and returns a JSON listing all `peers` (a peer is the call center operator, connected to Teravoz telephony system, able to make and receive calls);
- Listens to POST requests on endpoint `/actions`, expecting a JSON body like the one below, for simulating a call being triggered to a peer and an external number;
- After receiving that POST, the simulator starts emitting a flow of events to a **webhook**, an endpoint configured using an environment variable `WEBHOOK`. Those events are `call.new`, `call.waiting`, `actor.entered`, `call.ongoing`, `actor.left`, `call.finished`. When a peer answers the phone, the event `actor.entered` is emitted, and when the respective peer hangs up the phone, the event `actor.left` is emitted.

Example of a JSON body to POST `/actions`:
```
{
  "type": "dialer",
  "numbers": [ "5511999998888" ],
  "destination": "100",
  "destination_type": "peer",
  "code": "happy-peer-100",
  "retries": "1",
  "retry_gap": "10s",
  "ttl": "5m"
}
```
Here, a call will be triggered between peer 100 and the external number 5511999998888.

So, your application needs to do the following:
- Show a listing of all peers
- Each peer with respective status in real time and the timestamp for the last event;
- For each _free_ peer, a way to trigger a call;
- [_bonus_]: use of Docker containers;

**Super Extra Points**

Suppose your call center operation is really big and there are hundreds of peers. So, peer listing:
- must be paginated, and by default sorted by _busy_ peers (appear on top of listing);
- must have sorting by status and by last timestamp;
- must be searchable by peer number;

**4. Give us feedback**

What do you think about this challenge? Is this a nice and reliable way of assessing your skills? Would you think of another way? Would you make it better?
