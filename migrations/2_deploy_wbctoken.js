const WBCToken = artifacts.require("WBCToken");

module.exports = function (deployer) {
  deployer.deploy(WBCToken);
};
