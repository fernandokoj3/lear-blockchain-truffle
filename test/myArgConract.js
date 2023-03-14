const Contract = artifacts.require('MyArgContract');

contract('MyArgContract', (accounts) => {
  let contractInstance;
  let number;

  before(async () => {
    contractInstance = await Contract.deployed();
    number = await contractInstance.getNumber();
  });

  it('should execute when contract is one', async () => {
    assert.equal(number, 1, 'Function did not execute as expected');
  });
});
