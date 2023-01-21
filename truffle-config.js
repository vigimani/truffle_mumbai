const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 8545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    goerli: {
      provider: function(){
        return new HDWalletProvider(`${process.env.PRIVATE_KEY}`, `wss://goerli.infura.io/ws/v3/${process.env.INFURA_ID}`)
      },
      network_id:5,
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200,  
    },
    mumbai: {
      provider: function(){
        return new HDWalletProvider(`${process.env.PRIVATE_KEY}`, `https://polygon-mumbai.g.alchemy.com/v2/Tq1AOUpuFjYqIqve5C0p52dGFsu6xGXu`)
      },
      network_id:80001,
    }
  },

  mocha: {
  },

  compilers: {
    solc: {
      version: "0.8.17", // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       },
      }
    }
  }
}