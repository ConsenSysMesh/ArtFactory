pragma solidity ^0.4.15;

// ArtFactoryBuilder
//
// The core contract that the client interacts with to register new Artists.
contract ArtFactoryBuilder {
    address public owner;
    address[] public artists;
    mapping(address => address) public artistContracts;

    modifier notSignedUp {
        require(artistContracts[msg.sender] == 0);
        _;
    }

    constructor () public {
        owner = msg.sender;
    }

    // createArtist       Create a new Artist contract and update state variables
    // @param _nickname   The nickname of the Artist
    // @param _email      The email of the artist
    //
    // @return address    Returns the address of the new Artist contract
    function createArtist(string _nickname, string _email) public notSignedUp returns (address){
        Artist artist = new Artist(_nickname, _email, msg.sender);
        // Might be unnecessary to store an array of Artists unless we want to
        // list some of these artists on the client
        artists.push(msg.sender);

        // Store the reference to the Artist contract
        artistContracts[msg.sender] = artist;

        return artist;
    }
}

// Artist
//
// The contract that manages the state of the Artist and is responsible for creating and deploying
// Content contracts. The contract also holds the Ether balance for the artists to withdraw.
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


    // NewContent            Create a new Content contract and update state variables
    // @param _videoUrl      The IPFS url of the video
    // @param _thumbnailUrl  The IPFS url of the thumbnail
    // @param _title         The content title
    // @param _description   The content description
    // @param _price         The price that supporters will have to pay to access the content
    //
    // @return address       Returns the address of the new Content contract
    function createContent(
        string _videoUrl,
        string _thumbnailUrl,
        string _title,
        string _description,
        uint128 _price)
        public returns (address) {
            Content content = new Content(_videoUrl, _thumbnailUrl, _title, _description, _price, address(this));
            // Store the content in an array so we can access all of an artist's content
            contents.push(content);

            return content;
    }
    // TODO: Implement the following
    //function viewBalance()
    //function withdraw()
}

// Content
//
// The contract that manages the state of contents that Artists upload.
contract Content {
    string public videoUrl;
    address public artist;
    string public thumbnailUrl;
    string public title;
    string public description;
    uint128 public price;
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

