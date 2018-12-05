## ArtFactory


## Installation

Install all the dependencies:

`npm install`

Create a link to build artifacts if no link exists yet:

`cd src`
`ln -s ../build/contracts contracts`

Deploy contracts/migrations:

`truffle migrate --reset`

You might need to setup Ganache to use the same port (default is 8545) as defined in `truffle.js`.

## Running the Dapp Locally

Run Ganache either with the app or cli:

`ganache-cli`

Start the React app in development mode:

`npm start`

View the app at `http://localhost:3000/`

