const MiniToken = artifacts.require("MiniToken");
const ethers = require('ethers');
const mintAmount = ethers.utils.parseEther('10000');
contract("MiniToken", (accounts) => {
  it(`should put ${mintAmount} MiniToken in Alice account on ibc0`, () =>
    MiniToken.deployed()
      .then((instance) => instance.balanceOf(accounts[0]))
      .then((balance) => {
        assert.equal(balance.toString(), mintAmount, `${mintAmount} wasn't in Alice account`);
      }));
});
