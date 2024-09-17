Poseidon hash function deployment on EVM chains at `0x7eaE9c24323C8101C9B798319a4131d71B5af7fF` and libraries to interact with it.

* [Sepolia](https://sepolia.etherscan.io/address/0x7eaE9c24323C8101C9B798319a4131d71B5af7fF)
* [Holeski](https://holesky.etherscan.io/address/0x7eaE9c24323C8101C9B798319a4131d71B5af7fF)
* [Scroll Sepolia](https://sepolia.scrollscan.com/address/0x7eaE9c24323C8101C9B798319a4131d71B5af7fF)

## Features

| Feature | Supported |
|----------|------------ |
| ZK friendly | ✅ |
| Iden3 implementation | ✅ |
| Circom compatible | ✅ |
| Create X deployment | ✅ |
| NPM library | WIP |
| Mutiple parameters | WIP |


## Usage

Call the poseidon hash function from your contract by using an interface.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import {IPoseidon, PoseidonLib} from "https://github.com/Turupawn/poseidon-addresses/blob/master/src/Poseidon.sol";

contract MyContract {
    function hash(uint a, uint b) public view returns(uint) {
        return IPoseidon(PoseidonLib.getAddress()).poseidonHash([a, b]);
    }
}
```

## Interface

```solidity
// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

interface IPoseidon {
    function poseidon(uint[2] memory inputs) external view returns(uint[1] memory output);
}
```

## ABI

```json
[
	{
		"inputs": [
			{
				"internalType": "uint256[2]",
				"name": "inputs",
				"type": "uint256[2]"
			}
		],
		"name": "poseidon",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "output",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
```

## Other chains deployment

Poseidon hash should be compatible with any EVM chain full compatible with Ethereum. In case you need us to deploy it in a new chain please [submit an issue](https://github.com/Turupawn/poseidon-lib/issues).

Alternatively, you can deploy the it yourself by running the deploy script. To do so first, clone the repo and install the dependencies.

```bash
git clone https://github.com/Turupawn/poseidon-deploy.git
cd poseidon-deploy
git submodule update --init
npm install
```

Then, edit the `.env` file and run the deploy script. Notice you will need [CreateX](https://github.com/pcaversaccio/createx) to be deployed on the destination chain.

```bash
node scripts/deploy.mjs
```

The contract address will be printed on the terminal.