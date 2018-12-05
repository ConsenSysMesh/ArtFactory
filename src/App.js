import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from './components/Layout';
import LandingPage from './components/landing/Index';

import { Dimmer, Loader } from 'semantic-ui-react'

class App extends Component {
  state = {
    loading: true,
    drizzleState: null,
    account: null,
  }

  componentWillMount() {
    const { drizzle } = this.props;

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({
          loading: false,
          account: drizzleState.accounts[0],
          drizzleState
        });
      }
    });
  }

  render() {
    const { loading, account } = this.state

    if(loading)
      return "Loading Web3, accounts, and contracts...";

    return (
      <Router>
        <Layout account={account} drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} >
          <Route exact path="/" render={ () => <LandingPage drizzle={this.props.drizzle} drizzleState={this.state.drizzleState} />} />
        </Layout>
      </Router>
    );
  }
}

export default App;
