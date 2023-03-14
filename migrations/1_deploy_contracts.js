const myContract = artifacts.require("MyContract");
const myArgContract = artifacts.require("MyArgContract");

module.exports = (deployer) => {
    deployer.deploy(myContract);
    deployer.deploy(myArgContract, 1);
}