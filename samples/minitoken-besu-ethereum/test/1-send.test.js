const MiniToken = artifacts.require("MiniToken");

contract("MiniToken", (accounts) => {
  it("should sendTransfer 50 MiniCoin", async () => {
    const block = await web3.eth.getBlockNumber();
    MiniToken.deployed()
      .then((instance) =>
        instance.getPastEvents("SendTransfer", {
          filter: { from: accounts[0], to: accounts[1] },
          fromBlock: block,
        })
      )
      .then((evt) => {
        assert.equal(
          evt[0].args.amount.valueOf(),
          50,
          "50 wasn't in Alice account"
        );
      });
  });
});
