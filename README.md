# WebsocketClient
This is a simple client for developing, testing and debugging websocket servers.

## How to use
Go to [websocket-client.js.org](https://websocket-client.js.org/) and enter a websocket url.
After this is complete, you can enter some Json code and send it to the server, and in the field below you will see the server's response.

**Please note that you probably have [Cross-Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) problems.**
But you can clone or [download](https://github.com/MarcelCoding/websocket-client/archive/gh-pages.zip) the `gh-pages` branch and host it yourself or serve it with a local http server (e.g. [http-server](https://www.npmjs.com/package/http-server))

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* A JavaScript IDE (e.g. [IntelliJ IDEA](https://www.jetbrains.com/idea/))
* [Node 12](https://nodejs.org/) or highter
* [Yarn](https://yarnpkg.com/)
* [Angular CLI](https://cli.angular.io/)
* [Git](https://git-scm.com/)

### Configure
First you have to run `ng config -g cli.packageManager yarn` to set `Yarn` as your default package manager.

### Installing

To clone the repo run `git clone https://github.com/MarcelCoding/websocket-client.git`.
And when this is finished you can open the repo with your IDE.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Documentation
 * [Angular](https://angular.io/docs)

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io/).

<!--- 
### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
-->

## Built With

* [Angular](https://angular.io/) - The Web Framework
* [Yarn](https://yarnpkg.com/) - The build tool
* [Karma](https://karma-runner.github.io/) - The test tool

## Authors

* [**MarcelCoding**](https://github.com/MarcelCoding/) - *Initial work*
* [**JannikEmmerich**](https://github.com/JannikEmmerich/) - *Some typos and design stuff*
