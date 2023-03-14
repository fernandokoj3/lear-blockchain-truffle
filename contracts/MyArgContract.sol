// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

contract MyArgContract {
    address public owner;
    uint256 private number;

    constructor(uint256 _number) {
        number = _number;
        owner = msg.sender;
    }

    function getContract() public view returns(address) {
        return owner;
    }

    function getNumber() public view returns(uint256) {
        return number;
    }

}