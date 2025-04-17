
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const { contractTxId } = await req.json()
  try {
    const { WarpFactory } = await import("warp-contracts");
    const warp = WarpFactory.forMainnet({ inMemory: true, dbLocation: "" }); // or .forTestnet() if needed
    const contract = warp.contract(contractTxId);
    const { cachedValue } = await contract.readState();
    return NextResponse.json({ state: cachedValue }, { status: 200 })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
