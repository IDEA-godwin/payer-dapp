'use server'

import {Web3} from "web3";
import relayer_abi from "./relayer-abi.json";
import dai_abi from "./dai-abi.json";
import {SdkBase} from "@connext/sdk";
import {BigNumber} from "@ethersproject/bignumber";

const relayer_contract_address = process.env.NEXT_PUBLIC_RELAYER_CONTRACT_ADDRESS;
const dai_contract_address = process.env.NEXT_PUBLIC_DAI_CONTRACT_ADDRESS;
const key = process.env.ACCOUNT_KEY;


const web3 = new Web3("https://arb1.arbitrum.io/rpc");
const connext_base = SdkBase.create({
  network: 'mainnet',
  signerAddress: process.env.ACCOUNT_ADDRESS,
  chains: {
    42161: {
      providers: ['https://arb1.arbitrum.io/rpc'],
    },
    100: {
      providers: ['https://rpc.gnosischain.com']
    }
  }
});

export const getAccount = async () => {
  if (!key) return;
  if (web3.eth.accounts.wallet.length > 0) return web3.eth.accounts.wallet.get(0)?.address;

  return web3.eth.accounts.wallet.add(key)[0].address;
}

export const nextValidNonce = async (acct: string) => {

}

export const getWalletBalance = async () => {
  const acct = await getAccount();
  if (!acct) return;
  console.log(await web3.eth.getBalance(acct));
}

export const getDaiWalletBalance = async (acct: string) => {
  const contract = new web3.eth.Contract(dai_abi, dai_contract_address);
  console.log(await contract.methods.balanceOf(acct).call())
}

export const approveSpend = async (acct: string, amount: number, bridge_addr?: string) => {
  bridge_addr = bridge_addr ? bridge_addr : await getDefaultBridgeAddress();
  const contract = new web3.eth.Contract(dai_abi, dai_contract_address);
  const dai_amount = resolveDaiAmount(Math.ceil(amount));

  await contract.methods.approve(bridge_addr, dai_amount).send({from: acct});
}

export const pay = async (acct: string, meter_id: number, amount: number, bridge_addr?: string) => {
  bridge_addr = bridge_addr ? bridge_addr : await getDefaultBridgeAddress();
  const contract = await getRelayerContract();
  const dai_amount = resolveDaiAmount(amount);

  const relayer_fee = await estimateFee();
  return contract.methods.pay(dai_amount, meter_id, bridge_addr)
    .send({from: acct, value: relayer_fee.toString()});
}

export const getRelayerContract = async () => {
  return new web3.eth.Contract(relayer_abi, relayer_contract_address);
}

export const getDefaultBridgeAddress = async (): Promise<string> => {
  const contract = await getRelayerContract();
  return contract.methods.DEFAULT_BRIDGE().call();
}

const resolveDaiAmount = (amount: number) => amount * (Math.pow(10, 18));

const estimateFee = async (): Promise<BigNumber> => (await connext_base).estimateRelayerFee({
  originDomain: '1634886255',
  destinationDomain: '6778479'
})
