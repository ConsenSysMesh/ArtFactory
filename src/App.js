import React, { Component } from "react";
import ArtFactoryContract from "./contracts/ArtFactoryContent.json";
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import { Link } from 'react-router-dom';

import "./App.css";

class App extends Component {
  state = { 
    balance: 0, 
    web3: null, 
    accounts: null, 
    contract: null,
    mediaFiles: null,
    displayMediaFiles: null };

  sampleData = [{title: "in my feelings", artist: "Drake"}, {title: "Killing me softly", artist: "fugees"}]

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

  getMedia = async () => {
    const { accounts, contract } = this.state;

    // Get the value from the contract to prove it worked.
    const response = await contract.viewAllMedia();

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
      alert = <div class="alert alert-info col-sm-12" role="alert">Loading Web3, accounts, and contract...</div>;
      }
    
    return (
      
      <div className="App">
        <header className="navbar navbar-light bg-light justify-content-between" style={{marginBottom: '30px;'}} >
          <a className="navbar-brand" href="/">ArtFactory</a>
          <a className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" href="upload">Publish</a>
        </header>
        {alert}
        <div className="container-fluid">
          <div className="row">
            
            <div className="col-sm-12">
              <div className="jumbotron text-center col-md-8 offset-md-2" style={{backgroundColor: "white;"}}>
                <h2 className="display-4">Welcome to ArtFactory!</h2>
                <p className="lead">A media distribution and monetization network for independent artists</p>
                <hr className="my-4" />
                <p>Try it out!</p>
                <form className="lead" onSubmit={this.handleSubmit}>
                  <div className="input-group">

                    <input type="text" className="form-control" placeholder="artist, film" id="viewArt" style={{border: "none"}} />
                    <div className="input-group-append">
                      <button className="btn view" type="submit" style={{backgroundColor: "#BFE6BA;", borderLeft: "1px solid lightgrey"}} type="button">View Art</button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default App;
