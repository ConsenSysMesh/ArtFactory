import React, { Component } from "react";
import Header from './Header'
import Main from './Main'
import ArtFactoryContract from "../contracts/ArtFactoryContent.json";
import getWeb3 from "../utils/getWeb3";
import truffleContract from "truffle-contract";

import "../App.css";

class App extends Component {
  constructor () {
    super()
    this.state = {
      balance: 0,
      web3: null,
      accounts: null,
      contract: null,
      mediaFiles: null,
      displayMediaFiles: null
    }
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(ArtFactoryContract);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.getMedia);
    } catch (error) {
      // Catch any errors for any of the above operations.
      //alert('Failed to load web3, accounts, or contract. Check console for details.');
      console.log(error);
    }
  };

  updateForm() {
    console.log("event");
  };

  getMedia = async () => {
    const { accounts, contract } = this.state;

    // Get the value from the contract to prove it worked.
    //const response = await contract.viewAllMedia();
    const response = "coming soon"

    // Update state with the result.
    this.setState({ mediaFiles: response });
    this.setState({displayMediaFiles: this.state.mediaFiles})
  };





  handleSearch = (searchItem) => {
    //simple react search that only exposes items with matching title or author name
    // for item in state: {media: []} if the first letters don't match regex() then remove
    console.log("handling search");

    // this.setState({displayMediaFiles: this.state.mediaFiles.map(name,index){
    //   name.match(searchItem)
    // }})
  }


  render() {

    if (!this.state.web3) {
      alert = <div className="alert alert-info col-sm-12" role="alert">Loading Web3, accounts, and contract...</div>;
      }

    return (
    	<div className="App">
    	<Header />
    	<Main />
    	</div>
    )

  }

}

export default App
