pragma solidity ^0.4.15;

import "./SafeMath.sol";

// ArtFactory
//
// The core contract that the client interacts with to manage artists and their uploaded content.
contract ArtFactory {
    using SafeMath for uint256;

	// authorizedToView[_contentId][msg.sender]
    mapping(uint64 => mapping(address => bool)) authorizedToView;

	// *[_contentId]
    mapping(uint64 => uint256) artData;
    mapping(uint64 => uint256) price;

	// ownedBy[msg.sender][_contentId]
    mapping(address => mapping(uint64 => bool)) ownedBy;

    address public owner;
    uint64 count;
    mapping(address => uint256) public balances;

    modifier SignedUp {
        require(ownedBy[msg.sender][uint64(0)] == true);
        _;
    }

    modifier NotSignedUp {
        require(ownedBy[msg.sender][uint64(0)] != true);
        _;
    }

    constructor () public {
        owner = msg.sender;
        count = 1;
    }

    function signUp() public NotSignedUp returns (bool successful) {
        ownedBy[msg.sender][uint64(0)] = true;

        successful = true;
    }

    // @param _artData       The DNA of the piece, which is decrypted by the client
    // @param _price         The price that consumers pay to decrypt the data

    function createContent(
        uint256 _artData,
        uint256 _price)
        public returns (bool successful) {
            count ++;
            artData[count] = _artData;
            price[count] = _price;
            ownedBy[msg.sender][count] = true;

            successful = true;
    }

    function viewBalance(address _address) public view returns (uint256) {
        return balances[_address];
    }

    event Withdrawal(
        address indexed _by,
        uint _value
    );
    function withdraw(uint256 _amount) public {
        balances[msg.sender].sub(_amount);
        msg.sender.transfer(_amount);
        emit Withdrawal(msg.sender, _amount);
    }
    
    event Deposit(
        address indexed _from,
        uint _value
    );
    function deposit() public SignedUp payable {
        balances[msg.sender].add(msg.value);
        emit Deposit(msg.sender, msg.value);
    }
}

