var Greeter = artifacts.require("greeter");

module.exports = function(done) {
	console.log("Getting deployed version of Greeter...")
	Greeter.deployed().then(function(instance) {
		console.log("Setting value to 65...");
		return instance.set("Hello Quorum Dev", {privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]});
	}).then(function(result) {
		console.log("Transaction:", result.tx);
		console.log("Finished!");
		done();
	}).catch(function(e) {
		console.log(e);
		done();
	});
};
