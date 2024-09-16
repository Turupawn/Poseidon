import { createCode } from '../circomlibjs/src/poseidon_gencontract.js';
import { ethers } from 'ethers';
import * as dotenv from 'dotenv';

dotenv.config();

const CONTRACT_ADDRESS = '0xba5Ed099633D3B313e4D5F7bdc1305d3c28ba5Ed';
const DEPLOYER_ABI = [
  "function deployCreate2(bytes32, bytes memory initCode) external payable returns (address newContract)",
  "function computeCreate2Address(bytes32 salt, bytes32 initCodeHash) external view returns (address computedAddress)"
];

const deployContractWithCreate2 = async (bytecode, salt, provider) => {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, new ethers.JsonRpcProvider(provider));

  const contract = new ethers.Contract(CONTRACT_ADDRESS, DEPLOYER_ABI, wallet);

  // Call the deployCreate2 function on the contract
  //console.log("Wrong computed address:")
  //console.log(await contract.computeCreate2Address(salt, ethers.keccak256(bytecode)))

  const tx = await contract.deployCreate2(salt, bytecode, { gasLimit: 5000000 });
  const receipt = await tx.wait();

  const address = '0x' + receipt.logs[0].topics[1].slice(-40);  
  console.log("Deployed address:")
  console.log(address)

  return address;
};

async function deployPoseidon(parameterAmount) {
  const bytecode = createCode(parameterAmount);
  const salt = process.env.SALT;  // Generate a unique salt or retrieve from environment variable
  await deployContractWithCreate2(bytecode, salt, process.env.RPC_URL);
}

deployPoseidon(2).catch(console.error);
