require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom symptom spot warrior ridge remember coast harvest forest bone trigger'; 
let testAccounts = [
"0x7ca5d4e0c51991033e04159e346296e9c8f1922d9360be130fda60d3039f2c98",
"0x3a28d0df9de77a1ba93907fe6af0168b4816460a42d8ed272d6db95a3e5834a5",
"0x5cc74d536bb0a520ea427cf1f466f11f0f3cea82807be87cbb44135d64ce757d",
"0x52d62101a80e16d8f16127856df6a62615dcceef96eed6caecf84f8df0a2b9e0",
"0x99b51d43cd3b8339fb5281055eac09fb0d6ad6e6c9b179ffbd47b428a457857e",
"0xa53a83f7bf2313f3f5dafc1deb09934cd58532789e2e20560e97a83bb74da703",
"0x043f867fb97dc4f67c7b6bc3b755dcfd4bed944592df3ea9694084ad30d001a3",
"0x6d3c11b6c638d71d80260ce25e2b20bffd5cf195926437c0e7a96db69d52e79f",
"0x4c1c2da7acd4c78c4342e7037748208a4fb357b10102297f3e4ff63c51e0f45c",
"0x57c619d485b753efddba8ef51f06eeabddcd2be6db2e3415880418890c4f41c3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
