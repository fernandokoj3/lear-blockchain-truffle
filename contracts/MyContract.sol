// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

contract MyContract {
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function getContract() public view returns(address) {
        return owner;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Somente o proprietario pode chamar essa funcao");
        _;
    }

    function functionOnlyOwnerCanCall() public onlyOwner {
        
    }
}