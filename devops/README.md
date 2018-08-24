# DevOps Challenge

You're applying to a DevOps position at Teravoz, and in this step we'll require you to accomplish at least one of the four tasks listed below.

Here we're trying to assess the following skills:

- Understanding and solving of a given problem
- Infrastructure provisioning and organization
- Orchestration and configuration management
- Knowledge of some programming language
- Knowledge of Linux
- Troubleshooting and root cause analysis reporting
- Intelligible and useful documentation writing, like READMEs, configuration and code commentaries
- Dynamically right-size infrastructure scale
- Comprehensible English writing

You can submit answers on a GitHub repository or gist, or by email if you require privacy or confidentiality. We'd like all documentation to be written in English, but if you're uncomfortable with it, it's OK to be in Portuguese.

## Tasks

**1. Proud of**

Does this task make sense for a DevOps? What could be shared here?

**2. Ashamed of**

Does this task make sense for a DevOps? What could be shared here?

**3. Prepare your company to integrate with Teravoz API**

Suppose you work for the world famous e-commerce **Teracompra**, that already uses **Teravoz** as its telephony provider. Now your boss decided it is time to integrate with **Teravoz API**, which is an opportunity to have more visibility and control over its call center operation, specially in the upcoming Black Friday, when there will be an enormous amount of calls and things get pretty messy on the support team.

You and your teammate (who is a junior developer), envisioned a beginning for this integration project with capacity planning and scaling requirements in mind. You asked your teammate to code a small service which simulates Teravoz features, in order to create bursts of huge amounts of events, and you named this service as **TGIBF** (Thank God It's Black Friday).

TGIBF will POST events to a webhook, which is a HTTP Server and the entrypoint of **Teracompra** systems. As a first step, **Teracompra** systems need to persist the received events and return HTTP statuses `200 OK`.

So, you are required to do the following:
- Write a Dockerfile for TGIBF (your teammate put the code [here](./tgibf))
- Create the very first **Teracompra** systems as said above: a HTTP Server with a POST endpoint, and persisting received events in a database or in a file
- On the same HTTP Server, create a GET route which shows the number of events occured in the last 30 minutes, such number should be increasing from time to time until reaching a stable peak
- Create the whole infrastructure: you can decide if just for running on local machines, in this case using Docker Compose and Vagrant, or as a production-ready environment, with EC2 instances and Terraform configurations
- Run a load testing at least 30 minutes long to see everything working out
- _[bonus]_: orchestrate with Kubernetes/Minikube

As an answer, we expect a Vagrantfile or Terraform configurations with the whole infrastructure, and the respective instructions for us to run the same load testing.

**4. Give us feedback**

What do you think about this challenge? Is this a nice and reliable way of assessing your skills? Would you think of another way? Would you make it better?
