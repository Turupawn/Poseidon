## Run

Edit `.env` and then:

```
npm install
node scripts/deploy.mjs
```

## Example interface

```solidity
// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

interface IPoseidon {
    function poseidon(uint[2] memory inputs) external view returns(uint[1] memory output);
}
```