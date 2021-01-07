# Full RESTFul API (Node app) with multiple Angular clients

this is a full RESTFul API app implemented in Node.js with multiple clients (Angular apps) share the same packages base (node_modules)

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
