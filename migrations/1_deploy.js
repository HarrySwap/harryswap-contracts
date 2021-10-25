const HarryToken = artifacts.require('HarryToken.sol');
const HarryMasterChef = artifacts.require('HarryMasterChef.sol');

module.exports = async function (deployer, network) {
  if ('ftm' === network) {

    // 1. Deploy token
    await deployer.deploy(HarryToken);

    // 2. Deploy MC
    await deployer.deploy(
        HarryMasterChef,
        HarryToken.address,
        web3.utils.toWei('0.001'), // emission rate
        '17895500' // Start block
    );
  }
};
