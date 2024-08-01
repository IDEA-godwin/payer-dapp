
import { Web3 } from "web3";
import relayerAbi from "./relayer-abi.json"

const relayerContractAddress = process.env.NEXT_PUBLIC_RELAYER_CONTRACT_ADDRESS;

export const getRelayerContract = async (provider: string) => {
  const web3 = new Web3(provider);
  return new web3.eth.Contract(relayerAbi, relayerContractAddress);
}

export const getDefaultBridgeAddress = async () => {
  const rpc = "https://arb1.arbitrum.io/rpc"
  const contract = await getRelayerContract(rpc);
  const bridgeAddress = await contract.methods.DEFAULT_BRIDGE().call();
  console.log(contract);
}
