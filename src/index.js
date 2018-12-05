import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import { Drizzle, generateStore } from 'drizzle'

import ArtFactoryBuilder from './contracts/ArtFactoryBuilder.json'


const options = {
  contracts: [
    ArtFactoryBuilder,
  ]
}

const drizzleStore = generateStore(options)
const drizzle = new Drizzle(options, drizzleStore)

ReactDOM.render(<App drizzle={drizzle}/>, document.getElementById("root"));

registerServiceWorker();
