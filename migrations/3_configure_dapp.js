var ArtFactoryContentArtifact = artifacts.require("./ArtFactoryContent.sol");
var fs = require('../node_modules/file-system'); // use local instead of truffle fs module

function dappConfigure(instance, type) {
	fs.readFile('./app/client/cfg/' + type + '-config-template.txt', 'utf8', function (err, data) {
		if (!err) {
		  binary = instance.constructor._json.bytecode;
		  abi = web3.eth.contract(instance.abi);
	  	data = data.replace(
	  		new RegExp('_place_' + type + '_binary_here_', 'g'), binary.toString());
	  	data = data.replace(
	  		new RegExp('_place_' + type + '_abi_here_', 'g'), JSON.stringify(instance.abi));

		  fs.writeFile('./app/client/cfg/' + type + '-config.js', data.toString(), 'utf8', function (err) {
		     if (err) return console.error(err);
		  });

    } else {
      console.error("Behavior " + type + " contract creation error: ", error);
    }
	});
}

module.exports = function(deployer) {
	ArtFactoryContentArtifact.deployed().then(function(instance) {
		console.log(instance);
		type = 'content';
		dappConfigure(instance, type);
	});
}
