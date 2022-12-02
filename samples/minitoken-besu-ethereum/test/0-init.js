const MiniToken = artifacts.require("MiniToken");
const ethers = require('ethers');
module.exports = async (callback) => {
  const accounts = await web3.eth.getAccounts();
  const alice = accounts[0];
  // const mintAmount = 100;
  const mintAmount = ethers.utils.parseEther('10000');
  const miniToken = await MiniToken.deployed();
  const block = await web3.eth.getBlockNumber();
  await miniToken.mint(alice, mintAmount);
  const mintEvent = await miniToken.getPastEvents("Mint", { fromBlock: block });
  console.log(mintEvent);

  callback();
};
