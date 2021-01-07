# Full API app with Multiple Angular apps

A full API app with multiple Angular apps/libs share one packages base (node_modules folder)

## Running the code
The Angular apps use proxy configuration to appleals to the server,

In both: `client` and `server` directories you should `npm install` first.

Inside `server` directory just run `npm start`.

In order to run multiple apps inside `client` directory you should run the following commands:<br />
    - `nx serve covid`
    * `nx serve states`