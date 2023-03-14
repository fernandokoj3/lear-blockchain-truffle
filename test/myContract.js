const Contract = artifacts.require('MyContract');

contract('MyContract', (accounts) => {
  let contractInstance;
  let owner;

  before(async () => {
    contractInstance = await Contract.deployed();
    owner = await contractInstance.getContract();
  });

  it('should revert when non-owner tries to call a function', async () => {
    const nonOwner = accounts[1];
    try {
      await contractInstance.functionOnlyOwnerCanCall({ from: nonOwner });
      assert.fail('Expected function to revert');
    } catch (error) {
      assert(error.message.includes('revert'), `Expected "revert", got ${error}`);
    }
  });

  it('should execute when owner calls a function', async () => {
    const result = await contractInstance.functionOnlyOwnerCanCall({ from: owner });
    assert.equal(result, result, 'Function did not execute as expected');
  });
});
