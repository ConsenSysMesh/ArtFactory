var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "cuTINFxLMbm5vWIwOJSN";
var mnemonic = "spell reduce bike mind cereal decide barely alone sport gather shaft spoil";

module.exports = {
  networks: {
    ropsten: {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
      network_id: 3, // Official Ethereum test network
      gas: 3300000
    },
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};
