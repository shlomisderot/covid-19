# Full RESTFul API (Node app) with multiple Angular clients

This is a full RESTFul API app implemented in Node.js with multiple clients (Angular apps) share the same packages base (node_modules)

The server rely on [Nest.JS](https://nestjs.com/) which allows you to write code on the side of the server in a convention like in Angular.  

The possibility of running multiple Angular applications sharing one packages base (node_modules) is thanks to [Nrwl Nx](https://nx.dev/).

## Running the code
The Angular apps use proxy configuration to appleals to the server,

In both: `client` and `server` directories you should `npm install` first.

Inside `server` directory just run `npm start`.

In order to run multiple apps inside `client` directory you should run the following commands:
* `nx serve covid`
* `nx serve states`

Alternatively, you can run the local installation of Nx by prepending every command with npm run:

* `npm run nx -- serve covid`
* `npm run nx -- serve states`
