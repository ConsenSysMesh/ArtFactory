// auto-configure this section after contract deployments
ArtFactoryCampaignHex = '0x60606040525b60008054600160a060020a03191633600160a060020a03161790555b5b6106bb806100316000396000f300606060405236156100b45763ffffffff60e060020a6000350416632a03b48b81146100c1578063430bf08a146100f15780634a3931491461012057806355a373d61461015c5780636817031b1461018b5780638da5cb5b146101ac57806399d64ab0146101db578063a19ed39d14610200578063a6f9dae114610215578063b75ece9c14610236578063da682aeb14610120578063e29eb83614610297578063e4693e98146102bc578063f48c3054146102e1575b5b6100be33610309565b5b005b34156100cc57600080fd5b6100be600435602435604435600160a060020a0360643581169060843516610483565b005b34156100fc57600080fd5b61010461051b565b604051600160a060020a03909116815260200160405180910390f35b341561012b57600080fd5b610148600160a060020a036004358116906024351660443561052a565b604051901515815260200160405180910390f35b341561016757600080fd5b610104610534565b604051600160a060020a03909116815260200160405180910390f35b341561019657600080fd5b6100be600160a060020a0360043516610543565b005b34156101b757600080fd5b61010461058b565b604051600160a060020a03909116815260200160405180910390f35b34156101e657600080fd5b6101ee61059a565b60405190815260200160405180910390f35b341561020b57600080fd5b6100be6105a0565b005b341561022057600080fd5b6100be600160a060020a0360043516610617565b005b341561024157600080fd5b6101ee61065f565b60405190815260200160405180910390f35b341561012b57600080fd5b610148600160a060020a036004358116906024351660443561052a565b604051901515815260200160405180910390f35b34156102a257600080fd5b6101ee61066f565b60405190815260200160405180910390f35b34156102c757600080fd5b6101ee610675565b60405190815260200160405180910390f35b610148600160a060020a036004351661067b565b604051901515815260200160405180910390f35b600154421015801561031d57506002544211155b80156103935750600554600160a060020a031663f77c47916000604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561036c57600080fd5b6102c65a03f1151561037d57600080fd5b5050506040518051600160a060020a0316151590505b801561039e57503415155b80156103b05750600354346004540111155b15156103bb57600080fd5b6004805434908101909155600654600160a060020a03169080156108fc0290604051600060405180830381858888f1935050505015156103fa57600080fd5b600554600160a060020a031663827f32c0823460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561045957600080fd5b6102c65a03f1151561046a57600080fd5b50505060405180519050151561047f57600080fd5b5b50565b42841015801561049257508484115b80156104a8575069d3c21bcecceda10000008311155b80156104bc5750600160a060020a03821615155b15156104c757600080fd5b60018590556002849055600383905560058054600160a060020a0380841673ffffffffffffffffffffffffffffffffffffffff199283161790925560068054928516929091169190911790555b5050505050565b600654600160a060020a031681565b60015b9392505050565b600554600160a060020a031681565b60005433600160a060020a0390811691161461055e57600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b600054600160a060020a031681565b60035481565b6002544210156105af57600080fd5b600554600160a060020a0316633cebb823600060405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401600060405180830381600087803b151561060057600080fd5b6102c65a03f1151561061157600080fd5b5050505b565b60005433600160a060020a0390811691161461063257600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383161790555b5b50565b60015481565b60015b9392505050565b60045481565b60025481565b600061068682610309565b5060015b9190505600a165627a7a723058203d3092d1cc25bd4c5658a9161d1d1899b1c2893bd5c34009b3de5ba3ef153e110029';
ArtFactoryCampaignContract = web3.eth.contract(JSON.parse('[{"constant":false,"inputs":[{"name":"_startFundingTime","type":"uint256"},{"name":"_endFundingTime","type":"uint256"},{"name":"_maximumFunding","type":"uint256"},{"name":"_vaultAddress","type":"address"},{"name":"_tokenAddress","type":"address"}],"name":"Campaign","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"vaultAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"onTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newVaultAddress","type":"address"}],"name":"setVault","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maximumFunding","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finalizeFunding","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startFundingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"onApprove","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalCollected","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"endFundingTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"}],"name":"proxyPayment","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"payable":true,"type":"fallback"}]'));
