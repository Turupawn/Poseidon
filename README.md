Pedersen hash function deployment on EVM chains at `0x7eaE9c24323C8101C9B798319a4131d71B5af7fF`.

* [Sepolia](https://sepolia.etherscan.io/address/0x7eaE9c24323C8101C9B798319a4131d71B5af7fF)
* [Holeski](https://holesky.etherscan.io/address/0x7eaE9c24323C8101C9B798319a4131d71B5af7fF)
* [Scroll Sepolia](https://sepolia.scrollscan.com/address/0x7eaE9c24323C8101C9B798319a4131d71B5af7fF)

## Features

| Feature | Supported |
|----------|------------ |
| ZK friendly | ✅ |
| Iden3 implementation | ✅ |
| Circom compatible | ✅ |
| NPM library | WIP |
| Mutiple parameters | WIP |


## Usage

Call the poseidon hash function from your contract by using an interface.

```solidity
// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IPoseidon {
    function poseidon(uint[2] memory inputs) external view returns(uint output);
}

contract MyContract {
    function hash(uint a, uint b) public view returns(uint) {
        return IPoseidon(0x7eaE9c24323C8101C9B798319a4131d71B5af7fF).poseidon([a, b]);
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

## Deploy the contract yourself

First, clone the repo and install the dependencies.

```bash
git clone https://github.com/Turupawn/poseidon-deploy.git
cd poseidon-deploy
git submodule update --init
npm install
```

Then, edit the `.env` file and run the deploy script.

```bash
node scripts/deploy.mjs
```