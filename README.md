# EmbRails - A Modern Stack Template

![Rails & Ember CI Tests](https://github.com/parablesoft/embrails/workflows/Rails%20&%20Ember%20CI%20Tests/badge.svg?branch=master&event=push)

Rails + GraphQL + Ember. 

This is an opinionated template repository used for creating modern web applications at [ParableSoft](https://parablesoft.com). 

Feel free to open up a pull request with any suggestions for improvement.

## Prerequisites

You will need the following things properly installed on your computer.

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

You can use this template to create a new GitHub repository [here](https://github.com/parablesoft/embrails/generate).

To clone this repository: 
* `git clone https://github.com/parablesoft/embrails.git` this repository
* `cd embrails`
* `bin/development/setup`

We don't include gems and node modules as part of docker-compose development build process. Instead, we prefer to utilize volumes to store gems and node_modules so that we can cache dependencies between build if we need to modify our `Gemfile` or `package.json`. 

## Running / Development

* `docker-compose up`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your GraphQL IDE at [http://localhost:3000/graphiql](http://localhost:3000/graphiql).
* Visit your email inbox at [http://localhost:8025/](http://localhost:8025/). This is where emails emails will be sent from rails in development mode.

### Testing 

* `bin/test/full`

### Deploying

Specify what it takes to deploy your app.
