import React, { Component } from 'react';
import ArtFactoryBuilder from "./contracts/ArtFactoryBuilder.json";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from './components/Layout';
import LandingPage from './components/home/Index';

import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";


class App extends Component {
  state = {
    loading: true,
    account: null,
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(ArtFactoryBuilder);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
    } catch (error) {
      // Catch any errors for any of the above operations.
      //alert('Failed to load web3, accounts, or contract. Check console for details.');
      console.log(error);
    }
  };



  render() {
    if (!this.state.web3) return "Loading...";

    return (
      <Router>
        <Layout account={this.state.account} >

          <Route exact path="/"  render={ (props) => <LandingPage />} />
        </Layout>
      </Router>
    );
  }
}

export default App;
