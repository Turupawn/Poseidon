export const SITE_NAME = 'poseidon-lib';
export const SITE_DESCRIPTION = 'The ZK-friendly hashing deployment.';
export const COMPANY_NAME = 'FilosofiaCodigo';
export const COMPANY_URL = 'https://twitter.com/FilosofiaCodigo';
export const GITHUB_URL = 'https://github.com/Turupawn/poseidon-lib';
export const TWITTER_URL = 'https://twitter.com/FilosofiaCodigo';

export const MULTICALL_ADDRESS = '0x7eaE9c24323C8101C9B798319a4131d71B5af7fF';
export const MULTICALL_ABI = [
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
] as const;

export const MULTICALL_ABI_VIEM = `[
  "struct Call { address target; bytes callData; }",
  "struct Call3 { address target; bool allowFailure; bytes callData; }",
  "struct Call3Value { address target; bool allowFailure; uint256 value; bytes callData; }",
  "struct Result { bool success; bytes returnData; }",
  "function aggregate(Call[] calldata calls) public payable returns (uint256 blockNumber, bytes[] memory returnData)",
  "function aggregate3(Call3[] calldata calls) public payable returns (Result[] memory returnData)",
  "function aggregate3Value(Call3Value[] calldata calls) public payable returns (Result[] memory returnData)",
  "function blockAndAggregate(Call[] calldata calls) public payable returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData)",
  "function getBasefee() view returns (uint256 basefee)",
  "function getBlockHash(uint256 blockNumber) view returns (bytes32 blockHash)",
  "function getBlockNumber() view returns (uint256 blockNumber)",
  "function getChainId() view returns (uint256 chainid)",
  "function getCurrentBlockCoinbase() view returns (address coinbase)",
  "function getCurrentBlockDifficulty() view returns (uint256 difficulty)",
  "function getCurrentBlockGasLimit() view returns (uint256 gaslimit)",
  "function getCurrentBlockTimestamp() view returns (uint256 timestamp)",
  "function getEthBalance(address addr) view returns (uint256 balance)",
  "function getLastBlockHash() view returns (bytes32 blockHash)",
  "function tryAggregate(bool requireSuccess, Call[] calldata calls) public payable returns (Result[] memory returnData)",
  "function tryBlockAndAggregate(bool requireSuccess, Call[] calldata calls) public payable returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData)",
] as const`;

export const MULTICALL_ABI_ETHERS = `[
  "function aggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes[] returnData)",
  "function aggregate3(tuple(address target, bool allowFailure, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
  "function aggregate3Value(tuple(address target, bool allowFailure, uint256 value, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
  "function blockAndAggregate(tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)",
  "function getBasefee() view returns (uint256 basefee)",
  "function getBlockHash(uint256 blockNumber) view returns (bytes32 blockHash)",
  "function getBlockNumber() view returns (uint256 blockNumber)",
  "function getChainId() view returns (uint256 chainid)",
  "function getCurrentBlockCoinbase() view returns (address coinbase)",
  "function getCurrentBlockDifficulty() view returns (uint256 difficulty)",
  "function getCurrentBlockGasLimit() view returns (uint256 gaslimit)",
  "function getCurrentBlockTimestamp() view returns (uint256 timestamp)",
  "function getEthBalance(address addr) view returns (uint256 balance)",
  "function getLastBlockHash() view returns (bytes32 blockHash)",
  "function tryAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (tuple(bool success, bytes returnData)[] returnData)",
  "function tryBlockAndAggregate(bool requireSuccess, tuple(address target, bytes callData)[] calls) payable returns (uint256 blockNumber, bytes32 blockHash, tuple(bool success, bytes returnData)[] returnData)",
]`;

export const MULTICALL_SOLIDITY_INTERFACE = `// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;
pragma experimental ABIEncoderV2;

interface IMulticall3 {
  struct Call {
    address target;
    bytes callData;
  }

  struct Call3 {
    address target;
    bool allowFailure;
    bytes callData;
  }

  struct Call3Value {
    address target;
    bool allowFailure;
    uint256 value;
    bytes callData;
  }

  struct Result {
    bool success;
    bytes returnData;
  }

  function aggregate(Call[] calldata calls)
    external
    payable
    returns (uint256 blockNumber, bytes[] memory returnData);

  function aggregate3(Call3[] calldata calls) external payable returns (Result[] memory returnData);

  function aggregate3Value(Call3Value[] calldata calls)
    external
    payable
    returns (Result[] memory returnData);

  function blockAndAggregate(Call[] calldata calls)
    external
    payable
    returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData);

  function getBasefee() external view returns (uint256 basefee);

  function getBlockHash(uint256 blockNumber) external view returns (bytes32 blockHash);

  function getBlockNumber() external view returns (uint256 blockNumber);

  function getChainId() external view returns (uint256 chainid);

  function getCurrentBlockCoinbase() external view returns (address coinbase);

  function getCurrentBlockDifficulty() external view returns (uint256 difficulty);

  function getCurrentBlockGasLimit() external view returns (uint256 gaslimit);

  function getCurrentBlockTimestamp() external view returns (uint256 timestamp);

  function getEthBalance(address addr) external view returns (uint256 balance);

  function getLastBlockHash() external view returns (bytes32 blockHash);

  function tryAggregate(bool requireSuccess, Call[] calldata calls)
    external
    payable
    returns (Result[] memory returnData);

  function tryBlockAndAggregate(bool requireSuccess, Call[] calldata calls)
    external
    payable
    returns (uint256 blockNumber, bytes32 blockHash, Result[] memory returnData);
}
`;
