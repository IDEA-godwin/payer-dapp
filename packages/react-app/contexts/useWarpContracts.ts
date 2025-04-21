import { WarpFactory, Tag } from "warp-contracts";


//@ts-ignore
import { EthersExtension } from "m3tering-ethers";
//@ts-ignore
import { Ed25519Extension } from "m3tering-ed25519";


export const fetchState = async (contractTxId: string) => {
  const input = {
    payload:
      [
        "[0,218.4,0.47,0.009708]",
        "iSSc6rP+WNvA+HsMuHx4kXvb4uo4+qgsQr1txwA2ljIwmk/RHWjGN7QSw9nFGBWmdozbe9rBq5fE+UVVYjEvCg==",
        "3hJqbHdoQszEh8ilx12DHNH3kKWjDao3QIUeAgVolHw=",
      ], function: "meter"
  };

  const tags = [
    { name: "Contract-Label", value: "M3ters" } as Tag,
    { name: "Contract-Use", value: "M3tering Protocol" } as Tag,
    { name: "Content-Type", value: "application/json" } as Tag,
  ];

  const warp = WarpFactory.forMainnet({ inMemory: true, dbLocation: "" })
    .use(new Ed25519Extension())
    .use(new EthersExtension());
  const wallet = await warp.arweave.wallets.generate();
  const contract = warp.contract(contractTxId).connect(wallet);
  console.log(contract.evaluationOptions)
  const result = await contract.setEvaluationOptions({ ignoreExceptions: true }).dryWrite(
    input,
    undefined,
    tags
  );

  console.log(result)

  return result
}