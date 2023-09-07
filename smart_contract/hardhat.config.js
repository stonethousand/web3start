//https://eth-sepolia.g.alchemy.com/v2/XqmIMCsgA0rK4hX2GVG_LQfTXJ0UdUe_
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/XqmIMCsgA0rK4hX2GVG_LQfTXJ0UdUe_',
      accounts: ['afabaa17c2b023d22e740d327dc891125d77eceff936c1144b21bc7f02eb5de3'],
    },
  }
};