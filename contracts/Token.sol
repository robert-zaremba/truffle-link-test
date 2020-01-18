pragma solidity ^0.6.1;

import "./SafeMath.sol";

contract Token {
    using SafeMath for uint256;
    uint256 secret = 2;

    function add(uint256 _arg) public view returns(uint256) {
        return secret.add(_arg);
    }
}
