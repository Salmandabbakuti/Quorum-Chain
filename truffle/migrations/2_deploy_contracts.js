// File: `./migrations/2_deploy_simplestorage.js`

var Greeter= artifacts.require("greeter");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  deployer.deploy(Greeter, "Hello Guys", {privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]})
};