pragma solidity ^0.5.0;
contract greeter{
	
string public greeting;

constructor(string memory _deployGreeting) public{
	
	greeting=_deployGreeting;
}

function greet(string memory _greeting) public {

	      greeting=_greeting;
	}
}