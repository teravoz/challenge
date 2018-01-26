# Teravoz Challenge

You're applying to a developer job at Teravoz, and in this step we'll require you to accomplish at least one of the four tasks listed below.

Here we're trying to assess the following skills:

- Understanding and solving of a given problem
- Comprehensible code writing and organization
- Knowledge of JavaScript
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

**3. Write a client for Teravoz API**

Let's suppose you're a developer working for a company with a **call center** operation. There's a receptionist who handles calls and transfers them following some rules:
- first, receptionist answers and asks customer's phone number
- then, searches customer on company's contacts list system
- if not found, registers customer number into contacts list, and then transfers call to extension `900`, which is a call center queue for handling first contact customers;
- if found, transfers call to extension `901`, which is a call center queue for handling returning customers;

Such operation is expensive, error-prone and takes a lot of time for a customer to be answered. Your company already uses Teravoz as call center platform provider. You envisioned that, using **Teravoz API** features, you could automate your call center operation. So you decided to integrate your company's system with Teravoz, by replacing manual steps like asking customer's phone number and deciding which queue to transfer call.

So your **Node.js** application has to do the following:
- Listen to every event emitted by Teravoz at `/webhook` endpoint
- When an event of type _call.standby_ arrives, you need to **delegate** that call based on the given criteria above
- When app is restarted, it needs to work as if it hasn't at all
- _[bonus]_ a little dashboard showing current active calls

Unfortunately, Teravoz doesn't have a _sandbox_ environment which you could use for interacting with, so you need to mock everything out.

We're expecting your application to be fully operational and well documented. You don't need to use a database, a plain-text file shall do the job. You can use any library you want.

**4. Give us feedback**

What do you think about this challenge? Is this a nice and reliable way of assessing your skills? Would you think of another way? Would you make it better?
