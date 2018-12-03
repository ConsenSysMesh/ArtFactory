pragma solidity ^0.4.15;

contract ArtFactoryContent {
	// internal variables
	address creator;
	mapping (address => uint) amountPaid;
	mapping (address => bool) paid;
  mapping (address => string) handles;
  uint balance;

	// public variables
	string public name;
	uint public price;
  string public handle;

  // log the Publish events
  event Publish(address _creator, string _name, uint _price);

  // log the Deposit events
  event Deposit(address from, uint value);

  // content creation
	constructor (string _name, uint _price, string _handle) public payable {
		creator = msg.sender;
		name = _name;
		price = _price; // zero if not provided
    handle = _handle;

		emit Publish(msg.sender, name, price);
	}

	// payment transaction
  function pay() public payable returns (string) {
    // add to value associated with payer
  	amountPaid[msg.sender] += msg.value;

    // if reached purchase threshold, set state to paid and re-encrypt/store content
  	if (amountPaid[msg.sender] >= price) {
  		paid[msg.sender] = true;

      handles[msg.sender] = handle; // will be encrypted individually for each consumer
  	}

    // add to the contract balance
    balance += msg.value;

  	// send notification deposit is complete
    emit Deposit(msg.sender, msg.value);

    return handles[msg.sender];
  }

  // payment transaction via curator
  function portalPay(address _portal)public payable {
    // 1% to the portal
    uint portalPayAmount = msg.value/100;
    // 99% to the creator
    uint creatorPayAmount = msg.value - msg.value/100;

    if (portalPayAmount + creatorPayAmount != msg.value) {
      // return funds when the creator/portal split creates an unwanted remainder
      revert();
    }

    // send one percent to referring portal
    // do not handle the case if send() has been overridden and fails
    if (_portal.send(portalPayAmount) != true) revert();

    // add to value associated with payer
    amountPaid[msg.sender] += msg.value;

    // if reached purchase threshold, set state to paid and re-encrypt/store content
    if (amountPaid[msg.sender] >= price) {
      paid[msg.sender] = true;

      handles[msg.sender] = handle; // will be encrypted individually for each consumer
    }

    // add to the contract balance
    balance += msg.value;

    // send notification deposit is complete
    emit Deposit(msg.sender, msg.value);
  }

	function purchased() public constant returns(bool) {
		return paid[msg.sender];
	}

  function getHandle() public constant returns(string) {
    return handles[msg.sender];
  }

  // return balance
  function viewBalance() public constant returns(uint) {
    if (msg.sender != creator) revert();

    return balance;
  }

  // function viewAllMedia() public constant returns(){
  //   //returns dynamic array
  // }

  // withdraw complete balance
  function withdraw() public {
    if (msg.sender != creator) revert();

    // do not handle the case if send() has been overridden and fails
    if (msg.sender.send(balance)) {
      balance = 0;
    }
  }

  // withdraw up to complete balance
  function withdraw(uint value) public {
    if (msg.sender != creator) revert();

    if (value <= balance) {
      // do not handle the case if send() has been overridden and fails
      if (msg.sender.send(value)) {
        balance -= value;
      }
    }
  }
}
