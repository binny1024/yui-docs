const MiniToken = artifacts.require("MiniToken");
const ethers = require('ethers');
module.exports = async (callback) => {
  const accounts = await web3.eth.getAccounts();
  const alice = accounts[0];
  const bob = accounts[1];
  const mintAmount = ethers.utils.parseEther('10000');
  // const mintAmount = 100;
  // const sendAmount = 50;
  const sendAmount = ethers.utils.parseEther('5000');
  const port = "transfer";
  const channel = "channel-0";
  const timeoutHeight = 0;

  const miniToken = await MiniToken.deployed();
  await miniToken.sendTransfer(sendAmount, bob, port, channel, timeoutHeight, {
    from: alice,
  });
  const sendTransfer = await miniToken.getPastEvents("SendTransfer", {
    fromBlock: 0,
  });
  console.log(sendTransfer);

  callback();
};
