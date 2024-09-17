// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

library PoseidonLib {
    address constant POSEIDON_ADDRESS = 0x7eaE9c24323C8101C9B798319a4131d71B5af7fF;

    function getAddress() internal pure returns (address) {
        return POSEIDON_ADDRESS;
    }
}