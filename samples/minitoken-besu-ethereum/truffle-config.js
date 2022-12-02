/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
// var mnemonic = "math razor capable expose worth grape metal sunset metal sudden usage scheme";
var mnemonic = "private desert repeat shaft select during blood vault panda shoot shaft clutch";
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();
const contract_dir = "./../../contracts/minitoken/solidity";
const host_ibc0 = "https://node.lingjingchain.cn";
const host_ibc1 = "https://ibc1.chain.lingjingchain.cn"
module.exports = {
    /**
     * Networks define how you connect to your ethereum client and let you set the
     * defaults web3 uses to send transactions. If you don't specify one truffle
     * will spin up a development blockchain for you on port 9545 when you
     * run `develop` or `test`. You can ask a truffle command to use a specific
     * network from the command line, e.g
     *
     * $ truffle test --network <network-name>
     */
    contracts_directory: contract_dir,
    contracts_build_directory: contract_dir + "/build/contracts",
    migrations_directory: contract_dir + "/migrations",
    networks: {
        // Useful for testing. The `development` name is special - truffle uses it by default
        // if it's defined here and no other network is specified at the command line.
        // You should run a client (like ganache-cli, geth or parity) in a separate terminal
        // tab if you use this network and you must also set the `host`, `port` and `network_id`
        // options below to some value.
        //
        development: {
            host: "127.0.0.1",     // Localhost (default: none)
            port: 8545,            // Standard Ethereum port (default: none)
            network_id: "*",       // Any network (default: none)
            //  gas: 100000000,
            provider: () =>
                new HDWalletProvider(mnemonic, "http://localhost:8545", 0, 10)
        },
        ibc0: {
            host: "node.lingjingchain.cn",     // Localhost (default: none)
            port: 8545,            // Standard Ethereum port (default: none)
            network_id: "1888",       // Any network (default: none)
            // gas: 100000000,
            networkCheckTimeout: 10000,
            provider: () =>
                new HDWalletProvider({
                    mnemonic: {
                        phrase: mnemonic
                    },
                    providerOrUrl: host_ibc0,
                    addressIndex: 0,
                    numberOfAddresses: 10,
                    pollingInterval: 8000 // Reducing socket hang up error
                })

        },
        ibc1: {
            host: "node1.lingjingchain.cn",     // Localhost (default: none)
            // host: "https://ibc1.chain.lingjingchain.cn",
            port: 8545,            // Standard Ethereum port (default: none)
            network_id: "1889",       // Any network (default: none)
            // gas: 100000000,
            networkCheckTimeout: 10000000,
            pollingInterval: 30000,
            timeoutBlocks: 40000,
            provider: () =>
                new HDWalletProvider(mnemonic, host_ibc1, 0, 10)
        }
    },

    // Set default mocha options here, use special reporters etc.
    mocha: {
        // timeout: 100000
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: "0.8.9",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {          // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true,
                    runs: 1000
                },
                //  evmVersion: "byzantium"
            }
        }
    },

    plugins: [
        'truffle-contract-size'
    ]
};
