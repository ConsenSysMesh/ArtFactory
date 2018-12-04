var ArtFactoryContent = artifacts.require("./ArtFactoryContent.sol");

name = 'Symphony01'
price = 2
handle = 'smooth'

module.exports = function(deployer) {
  deployer.deploy(ArtFactoryContent, name, price, handle);
};

