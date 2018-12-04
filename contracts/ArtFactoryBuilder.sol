pragma solidity ^0.4.25;

contract ArtFactoryBuilder {
    address owner;
    address[] public artists;
    mapping(address => address) public artistContracts;
    mapping(address => bool) public signedUp;

    modifier notSignedUp {
        require(!signedUp[msg.sender]);
        _;
    }

    constructor () public {
        owner = msg.sender;
    }

    function newArtist(string _nickname, string _email) public notSignedUp returns (address){
        Artist artist = new Artist(_nickname, _email, msg.sender);
        artists.push(msg.sender);
        signedUp[msg.sender] = true;
        artistContracts[msg.sender] = artist;

        return artist;
    }
}

contract Artist {
    address[] public contents;
    string public nickname;
    string public email;
    address public artistAddress;

    constructor(string _nickname, string _email, address _artistAddress) public {
        nickname      = _nickname;
        email         = _email;
        artistAddress = _artistAddress;
    }
  function newContent(
    string _videoUrl,
    string _thumbnailUrl,
    string _title,
    string _description,
    uint128 _price) public returns (address) {
        Content content = new Content(_videoUrl, _thumbnailUrl, _title, _description, _price, address(this));
        contents.push(content);

        return content;
    }

    //function viewBalance()
    //function withdraw()
}

contract Content {
    string public videoUrl;
    address public artist;
    string public thumbnailUrl;
    string public title;
    string public description;
    uint128  public price;
    mapping(address => bool) public viewingAllowed;

    constructor(
      string _videoUrl,
      string _thumbnailUrl,
      string _title,
      string _description,
      uint128 _price,
      address _artist) public {
          videoUrl     = _videoUrl;
          thumbnailUrl = _thumbnailUrl;
          title        = _title;
          description  = _description;
          price        = _price;
          artist       = _artist;
  }
}

