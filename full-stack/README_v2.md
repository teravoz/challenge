# Full-Stack Challenge

You're applying to a Full-Stack developer position at Teravoz, and in this step we'll require you to accomplish the four tasks listed below.

Points considered during the assessment:
- Understanding and solving of a given problem;
- Comprehensible code writing and organization;
- Knowledge in Node.js (JavaScript/TypeScript), Go, Python when it comes to the back-end;
- Knowledge in JavaScript and React when it comes to front-end;
- Code favoring simplicity over complexity, explicitness over implicitness;
- Handling of errors, graceful shutdown, structured logging, configuration files;
- Implementation of unit and integration tests;
- Usage of Docker to containerize the application to ease the deployment;
- Documentation describing the project and the steps to execute;
- Documentation in the code for functions/methods/classes/etc;
- Comprehensible English writing.

You can submit answers as a GitHub/GitLab/Bitbucket repository, you're free to make it a private repository if you require privacy or confidentiality.

## Tasks

**1. Proud of**

Share a little piece of code or even an entire application, in any programming language, that you developed and you're proud of, telling us why.

**2. Ashamed of**

Share a little piece of code or even an entire application, in any programming language, that you developed or saw and you're ashamed of (or secondhand embarrassed for), telling us why.

**3. Write an application to integrate with the Teravoz API**
​
Let's suppose you're a developer working for a company with a call center operation. There's a receptionist answering calls and transferring them following some steps:
​
* First, the receptionist answers the call and asks the customer's phone number.
* Then searches for the customer on the company's contacts list system.
* **In case it's not found**, he registers the customer number in the contacts list, and then transfers the call to the extension `900`, which is a call center queue for handling customers getting in touch for the first time. The operation requires the receptionist to **dial** `*2900` on the phone with the call ongoing.
* **In case it's found**, he transfers the call to extension `901`, which is a call center queue for handling returning customers. The operation requires the receptionist to dial `*2901` on the phone with the call ongoing as well.

Such operation is expensive, error-prone and takes a lot of time for a customer to be answered. Your company already uses Teravoz as a platform for their call center operation, meaning that all incoming and outgoing calls goes through Teravoz's services and you can have access to everything through the API.
​
After reading the documentation on [developers.teravoz.com.br](https://developers.teravoz.com.br), you noticed a feature called [Delegate](https://developers.teravoz.com.br/#intro-delegate) that allows you to programmatically decide what to do with a call. Basically it requires you to have an API which will always, on the same endpoint, receive HTTP requests from Teravoz, and depending on the `type` of the event received (`call.standby`) you are required to send a `POST /actions` request specifying the destination to which the call should be transferred based on the business logic previously mentioned. In order to receive the HTTP requests you have to register the public address to your server (accessible from the internet) in the [administrative panel](https://challenge.teravoz.com.br).

Overview of [administrative panel](https://challenge.teravoz.com.br) features:
- Webhook
  - Registration of public address to receive the API events;
  - Visualization of the events sent to the configured public address.
- API
  - Access to the credentials you will use to send the requests.

Remember that although you're reading the documentation from [developers.teravoz.com.br](https://developers.teravoz.com.br), as a candidate you need to send your requests to [challenge-api.teravoz.com.br](https://challenge-api.teravoz.com.br), instead of [api.teravoz.com.br](https://api.teravoz.com.br). It should also be stated that the application at [challenge-api.teravoz.com.br](https://challenge-api.teravoz.com.br) has only one endpoint implemented, `POST /actions`, therefore, requests to the other documented endpoints will fail.
​
Well, it seems to fit your needs, right? So you decide to build an API to integrate with Teravoz.
​
You can build your API in Node.js (JavaScript/TypeScript), Go, or Python, those are the primary programming languages we use at Teravoz, but besides that you're free to implement it using the packages/libraries/frameworks you love the most.
​
Once registered your API will immediately start to receive events as POST requests on your `/webhook` endpoint (remember to register your server address using the [administrative panel](https://challenge.teravoz.com.br) we mentioned earlier). One of the events received will be of the type `call.standby`, and as soon as you receive this event you have to respond by sending a `POST /actions` request to delegate this call according to the business criteria mentioned above. Remember that the `call.standby` event means the call is waiting for your response to continue, the caller will be there waiting in line, therefore, you're expected to reply quickly, the [documentation](https://developers.teravoz.com.br/#intro-delegate) states that you have to reply in 10 seconds at maximum, otherwise the call will be handled by Teravoz following an internally defined procedure. Also, according to the [documentation](https://developers.teravoz.com.br/#intro-delegate), this endpoint requires you to send a payload in which there is a `call_id` field, if you inspect the event received on your `/webhook` endpoint, you will notice a field by the same name that you're expected to use in your `POST /actions` request.

Also, build a front-end application in React which should interact with your back-end and display in realtime the currently active calls. You're free to implement it using WebSockets to make it even more interesting or you can from time to time poll the server for changes. A call is considered active when you receive a `call.new` event, and this state will last until you receive a `call.finished` event.

Tip: Don't be afraid to get in touch with us in case of questions or anything else, the team will happily assist you.

Tip: In the administrative panel you can check how your server received the events sent to it. This information might be useful to you for debugging purposes as you develop the application.

As a bonus, you're not required to, but would give you some extra points ;D
- Implement a back-end application to simulate locally the server at [challenge-api.teravoz.com.br](https://challenge-api.teravoz.com.br/);
- This application is expected to be:
  - An API to which your initial application will send the `POST /actions` requests;
    - Just like the [challenge-api.teravoz.com.br](https://challenge-api.teravoz.com.br/), there's no need to implement the whole documented API, only the `POST /actions` endpoint.
  - And a webhook server which will send the mocked events to your application as HTTP requests.
- There's no need to implement a UI just like we did at [challente.teravoz.com.br](https://challenge.teravoz.com.br).

**4. Give us feedback**

What do you think about this challenge? Is this a nice and reliable way of assessing your skills? Would you think of another way? Would you make it better?

Hope to see you soon, as a developer in our team :D