# Art Factory

Tokens for content

# Quick Start

## Application start
cd artfactory/

truffle migrate --network ropsten

cd app/

meteor npm install

meteor

## IPFS local daemon configuration and start
$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin "[\"http://localhost:3000\"]"

$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials "[\"true\"]"

$ ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods "[\"PUT\", \"POST\", \"GET\"]"

$ ipfs daemon &

## Browser dev console

// test data:
// .mp4 video
// ipfs handle: QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP
//
// drone swarm behavior 
// ipfs handle: QmVHaFq59emoKZhtSyUkqEfvyuffkUmzgmBQA7pv2GygXA

// access IPFS via client-side Javascript API

`var ipfs = window.IpfsApi();`

// (optional) validation of IPFS local data consumption in browser

`ipfs.id()
  .then(function (id) {
    console.log('my id is: ', id)
  })
  .catch(function(err) {
    console.log('Fail: ', err)
  })`

// (optional) validation of IPFS local data consumption in browser

`window.open('http://localhost:8080/ipfs/QmTca4A43f4kEvzTouvYTegtp6KobixRqweV12NrvwwtFP');`

// new content address can be retrieved after tx is mined successfully

`ArtFactoryContentContract.new(
	"content_0xAA", 
	10000000, 
	"QmPpeiynkfVpTajH3CMb8682vnNrhnBdsQjMToyeTswmSb", 
	{from: web3.eth.accounts[0], gas: 1000000, data: ArtFactoryContentHex}, function(error, result) {if (!error) contentCreationTransaction = result; else console.error(error);});`

// << assign address of new contract created (e.g., via etherscan.io) to newContent_0xAA >>

// e.g., on Ropsten

`newContent_0xAA = ArtFactoryContentContract.at("0x7a6550b6fd5edd33d2cca48f4f7fd4540754b289");`

// get name

`newContent_0xAA.name({}, function(error, result) {if (!error) contentName = result; else console.error(error);});`

// get price

`newContent_0xAA.price({}, function(error, result) {if (!error) contentPrice = result; else console.error(error);});`

// retrieve purchased status
`newContent_0xAA.purchased({}, function(error, result) {if (!error) contentPurchased = result; else console.error(error);});`

// purchase

`newContent_0xAA.pay({from: web3.eth.accounts[0], value: 10000000, gas: 1000000}, function(error, result) {if (!error) aa = result; else console.error(error);});`

// retrieve purchased status

`newContent_0xAA.purchased({}, function(error, result) {if (!error) contentPurchased = result; else console.error(error);});`

// retrieve purchased content handle

`newContent_0xAA.getHandle({}, function(error, result) {if (!error) contentHandle = result; else console.error(error);});`

// view balance

`newContent_0xAA.viewBalance({}, function(error, result) {if (!error) contentPurchased = result; else console.error(error);});`

// withdraw up to balance

`newContent_0xAA.withdraw(10000000, {from: web3.eth.accounts[0], gas: 1000000}, function(error, result) {if (!error) withdrawalTx = result; else console.error(error);});`