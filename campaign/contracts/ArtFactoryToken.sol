pragma solidity ^0.4.15;

import "./MiniMeToken.sol";

contract ArtFactoryToken is MiniMeToken {
  function ArtFactoryToken(address _controller)
    MiniMeToken(
      _controller,
      0x0,  // no parent token
      0,    // no snapshot block
      "Art Factory Token", 
      18,   // decimals,
      "AFT",
      true
    )
  {
    changeController(_controller);
  }
}
