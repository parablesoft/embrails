# EmbRails - A Modern Stack Template

Rails + GraphQL + Ember. 

This is an opinionated template repository used for creating modern web applications.

## Prerequisites

You will need the following things properly installed on your computer.

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

You can use this template to create a new GitHub repository [here](https://github.com/parablesoft/embrails/generate`).

To clone this repository: 
* `git clone https://github.com/parablesoft/embrails.git` this repository
* `cd embrails`
* `docker-compose build`

We don't include gems and node modules as part of docker-compose development build process. Instead, we prefer to utilize volumes to store gems and node_modules so that we can cache dependencies between build if we need to modify our `Gemfile` or `package.json`. 

Enter into the api container to install our gems, and create our database 
* `docker-compose run api bundle`
* `docker-compose run api bundle exec rake db:reset`

Enter into the web container to install our node modules. 
* `docker-compose run web yarn`

## Running / Development

* `docker-compose up`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Deploying

Specify what it takes to deploy your app.
