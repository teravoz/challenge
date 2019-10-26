**3. Write a client application to integrate with the Teravoz API**

Let's suppose you're a developer working for a company with a call center operation. The company is growing fast and Alice, one of the supervisors in charge of a team of agents feels like she is losing control of which extension belongs to which agent. 

Short glossary:
- Agents: the ones working at the telephone performing and receiving calls;
- Extensions: internal telephone numbers which someone can receive calls at or perform calls from.

Each agent possesses an extension, the extension is composed of a number ranging from 100 up to 799. Whenever a new agent is hired, or dismissed, Alice has to go through the process of adding, or removing, this agent from a spreadsheet. Every supervisor in the company owns a spreadsheet in the same format and they have to use them to control their agents.

This spreadsheet contains the following information regarding the agents:
- Unique employee identifier: in the following format, "123.456.798-AB";
- Employee's full name: for example "Josh Pavlov"
- Profile photo;
- Contact telephone or cellphone number;
- Extension number: unique and can't be owned by multiple agents, even if they have different supervisors.

For this reason Alice decided to talk to her manager and together they decided that maybe an internal web application could be of use to help Alice and even the other supervisors. Her manager then decided to request the development of this system to you, one of the company's distinguished developers.

Your task is to build a web application considering the context above and a few other requirements:
- User types:
    - Manager
        - Only one account of this type is allowed in the system;
        - It has to be allowed to create/query/update/delete supervisor users;
    - Supervisor
        - Multiple users of this type can be created;
        - Can create/query/update/delete agents;
        - Its agents aren't to be visible to other supervisors.
- Login screen for the supported user types;
- Possibility for a supervisor user to create agents importing its spreadsheet from a CSV file;
- Build the back-end using Node.js or Go and the front-end using React. You can also use TypeScript in the back-end (if you chose to use Node.js) and/or in the front-end;
- Store the data in a database of your preference;

As a bonus you can implement those additionals, you're not required to, but it would be nice ;)
- Unit tests and/or integration tests;
- Structured logging.