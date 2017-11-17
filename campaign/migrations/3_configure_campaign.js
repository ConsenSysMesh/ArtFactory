var ArtFactoryCampaignArtifact = artifacts.require("./ArtFactoryCampaign.sol");
var ArtFactoryTokenArtifact = artifacts.require("./ArtFactoryToken.sol");
var ControlledArtifact = artifacts.require("./Controlled.sol");
var MiniMeTokenArtifact = artifacts.require("./MiniMeToken.sol");

var fs = require('../node_modules/file-system'); // use local instead of truffle fs module

function campaignConfigure(instance, type) {
	fs.readFile('./cfg/' + type + '-config-template.txt', 'utf8', function (err, data) {
		if (!err) {
		  binary = instance.constructor._json.unlinked_binary;
		  abi = web3.eth.contract(instance.abi);
	  	data = data.replace(
	  		new RegExp('_place_' + type + '_binary_here_', 'g'), binary.toString());
	  	data = data.replace(
	  		new RegExp('_place_' + type + '_abi_here_', 'g'), JSON.stringify(instance.abi));

		  fs.writeFile('./cfg/' + type + '-config.js', data.toString(), 'utf8', function (err) {
		     if (err) return console.error(err);
		  });

    } else {
      console.error("Art Factory " + type + " contract creation error: ", error);
    }
	});
}

module.exports = function(deployer) {
	ArtFactoryCampaignArtifact.deployed().then(function(instance) {
		console.log(instance);
		type = 'campaign';
		campaignConfigure(instance, type);
	});
	ArtFactoryTokenArtifact.deployed().then(function(instance) {
		console.log(instance);
		type = 'token';
		campaignConfigure(instance, type);
	});
	ControlledArtifact.deployed().then(function(instance) {
		console.log(instance);
		type = 'controlled';
		campaignConfigure(instance, type);
	});
	MiniMeTokenArtifact.deployed().then(function(instance) {
		console.log(instance);
		type = 'mmt';
		campaignConfigure(instance, type);
	});
}
