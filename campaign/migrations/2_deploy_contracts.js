var ArtFactoryCampaign = artifacts.require("./ArtFactoryCampaign.sol");
var ArtFactoryToken = artifacts.require("./ArtFactoryToken.sol");
var MiniMeToken = artifacts.require("./MiniMeToken.sol");
var Controlled = artifacts.require("./Controlled.sol");

module.exports = function(deployer) {
  deployer.deploy(Controlled);
  deployer.deploy(ArtFactoryCampaign);
  deployer.deploy(ArtFactoryToken);
  deployer.deploy(MiniMeToken);
};
