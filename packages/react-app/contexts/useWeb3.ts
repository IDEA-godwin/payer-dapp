import { useState } from "react";
import StableTokenABI from "./cusd-abi.json";
import MinipayNFTABI from "./minipay-nft.json";
import M3tersABI from "./m3ters.json"
import {
  createPublicClient,
  createWalletClient,
  custom,
  getContract,
  http,
  parseEther,
  stringToHex,
} from "viem";
import { celoAlfajores, gnosis } from "viem/chains";

const publicClient = createPublicClient({
  chain: celoAlfajores,
  transport: http(),
});

const cUSDTokenAddress = "0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1"; // Testnet
const MINIPAY_NFT_CONTRACT = "0xE8F4699baba6C86DA9729b1B0a1DA1Bd4136eFeF"; // Testnet

export const useWeb3 = () => {

  const [address, setAddress] = useState<string | null>(null);

  const isMinipay = typeof window !== "undefined" && window.ethereum.isMiniPay;

  const getUserAddress = async () => {
    if (typeof window !== "undefined" && window.ethereum) {
      let walletClient = createWalletClient({
        transport: custom(window.ethereum),
        chain: celoAlfajores,
      });

      let [address] = await walletClient.getAddresses();
      setAddress(address);
    }
  };

  const getRegisteredM3ters = async () => {
    let publicClient = createPublicClient({
      chain: gnosis,
      transport: http()
    })
    return publicClient.readContract({
      abi: M3tersABI,
      address: "0x39fb420Bd583cCC8Afd1A1eAce2907fe300ABD02",
      functionName: "totalSupply",
      args: []
    })
  }

  const checkIsActiveOwner = async (m3terId: BigInt) => {
    const inActiveOwners = ["0x311d93Fa56A1C1eBe35802f489051a69Cd4B1871", "0x083DD066a145ACC6eE5B12c08A216cE9540A5d7F"]
    let publicClient = createPublicClient({
      chain: gnosis,
      transport: http()
    })
    const owner: any = await publicClient.readContract({
      abi: M3tersABI,
      address: "0x39fb420Bd583cCC8Afd1A1eAce2907fe300ABD02",
      functionName: "ownerOf",
      args: [m3terId]
    })
    return !inActiveOwners.includes(owner)
  }

  const sendCUSD = async (to: string, amount: string) => {
    let walletClient = createWalletClient({
      transport: custom(window.ethereum),
      chain: celoAlfajores,
    });

    let [address] = await walletClient.getAddresses();

    const amountInWei = parseEther(amount);

    const tx = await walletClient.writeContract({
      address: cUSDTokenAddress,
      abi: StableTokenABI.abi,
      functionName: "transfer",
      account: address,
      args: [to, amountInWei],
    });

    let receipt = await publicClient.waitForTransactionReceipt({
      hash: tx,
    });

    return receipt;
  };

  const mintMinipayNFT = async () => {
    let walletClient = createWalletClient({
      transport: custom(window.ethereum),
      chain: celoAlfajores,
    });

    let [address] = await walletClient.getAddresses();

    const tx = await walletClient.writeContract({
      address: MINIPAY_NFT_CONTRACT,
      abi: MinipayNFTABI.abi,
      functionName: "safeMint",
      account: address,
      args: [
        address,
        "https://cdn-production-opera-website.operacdn.com/staticfiles/assets/images/sections/2023/hero-top/products/minipay/minipay__desktop@2x.a17626ddb042.webp",
      ],
    });

    const receipt = await publicClient.waitForTransactionReceipt({
      hash: tx,
    });

    return receipt;
  };

  const getNFTs = async () => {
    let walletClient = createWalletClient({
      transport: custom(window.ethereum),
      chain: celoAlfajores,
    });

    const minipayNFTContract = getContract({
      abi: MinipayNFTABI.abi,
      address: MINIPAY_NFT_CONTRACT,
      client: publicClient,
    });

    const [address] = await walletClient.getAddresses();
    const nfts: any = await minipayNFTContract.read.getNFTsByAddress([
      address,
    ]);

    let tokenURIs: string[] = [];

    for (let i = 0; i < nfts.length; i++) {
      const tokenURI: string = (await minipayNFTContract.read.tokenURI([
        nfts[i],
      ])) as string;
      tokenURIs.push(tokenURI);
    }
    return tokenURIs;
  };

  const signTransaction = async () => {
    let walletClient = createWalletClient({
      transport: custom(window.ethereum),
      chain: celoAlfajores,
    });

    let [address] = await walletClient.getAddresses();

    const res = await walletClient.signMessage({
      account: address,
      message: stringToHex("Hello from Celo Composer MiniPay Template!"),
    });

    return res;
  };

  return {
    address,
    isMinipay,
    getRegisteredM3ters,
    checkIsActiveOwner,
    getUserAddress,
    sendCUSD,
    mintMinipayNFT,
    getNFTs,
    signTransaction,
  };
};
