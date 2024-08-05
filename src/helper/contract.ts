import {Web3} from "web3";
import relayer_abi from "./relayer-abi.json";
import dai_abi from "./dai-abi.json";

const relayer_contract_address = process.env.NEXT_PUBLIC_RELAYER_CONTRACT_ADDRESS;
const dai_contract_address = process.env.NEXT_PUBLIC_DAI_CONTRACT_ADDRESS;
const key = process.env.NEXT_PUBLIC_ACCOUNT_KEY;


const web3 = new Web3("https://arb1.arbitrum.io/rpc");

export const getAccount = () => {
  if (!key) return;
  if (web3.eth.accounts.wallet.length > 0) return web3.eth.accounts.wallet.get(0);

  return web3.eth.accounts.wallet.add(key)[0];
}

export const getWalletBalance = async () => {
  const acct = getAccount();
  if (!acct) return;
  console.log(await web3.eth.getBalance(acct?.address));
}

export const getDaiWalletBalance = async (acct: string) => {
  const contract = new web3.eth.Contract(dai_abi, dai_contract_address);
  console.log(await contract.methods.balanceOf(acct).call())
}

export const approveSpend = async (acct: string, amount: number, bridge_addr?: string) => {
  bridge_addr = bridge_addr ? bridge_addr : await getDefaultBridgeAddress();
  const contract = new web3.eth.Contract(dai_abi, dai_contract_address);
  const dai_amount = resolveDaiAmount(Math.ceil(amount));

  console.log(`approving bridge ${bridge_addr} transaction of ${dai_amount}dai`);
  await contract.methods.approve(bridge_addr, dai_amount).send({from: acct});
}

export const pay = async (acct: string, meter_id: number, amount: number, bridge_addr?: string) => {
  bridge_addr = bridge_addr ? bridge_addr : await getDefaultBridgeAddress();
  const contract = await getRelayerContract();
  const dai_amount = resolveDaiAmount(amount);

  console.log(`sending transaction to bridge ${bridge_addr} of ${dai_amount}dai`);
  return await contract.methods.pay(dai_amount, meter_id, bridge_addr).send({from: acct});
}

export const getRelayerContract = async () => {
  return new web3.eth.Contract(relayer_abi, relayer_contract_address);
}

export const getDefaultBridgeAddress = async (): Promise<string> => {
  const contract = await getRelayerContract();
  return await contract.methods.DEFAULT_BRIDGE().call();
}

const resolveDaiAmount = (amount: number) => amount * (Math.pow(10, 18));
