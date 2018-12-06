import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { Drizzle, generateStore } from 'drizzle'

import ArtFactory from './contracts/ArtFactory.json'


const options = {
  contracts: [
    ArtFactory,
  ]
}

const drizzleStore = generateStore(options)
const drizzle = new Drizzle(options, drizzleStore)

ReactDOM.render(<App drizzle={drizzle}/>, document.getElementById("root"));

registerServiceWorker();
