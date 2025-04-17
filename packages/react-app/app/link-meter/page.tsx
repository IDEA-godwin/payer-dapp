'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useWeb3 } from "@/contexts/useWeb3";
import M3ter from "@/components/M3ter";
import { useGlobalContext } from "@/contexts/GlobalContext";

export default function Page() {

  // const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [m3ters, setM3ters] = useState<number[] | undefined>(undefined);

  const navigate = useRouter();
  const { setM3ter } = useGlobalContext()

  const { checkIsActiveOwner, getRegisteredM3ters } = useWeb3();

  let count = 0;

  useEffect(() => {
    (async () => {
      const result: any = await getRegisteredM3ters();
      const m3ters = Array.from({ length: Number(result) }, (_, i) => i)
      const filtered = (await Promise.all(m3ters.map(async i => {
        if (await checkIsActiveOwner(BigInt(i))) return i
        else return 0
      }))).filter(i => i)
      setM3ters(filtered);
    })()
  }, [count])


  const handleSubmit = (id: any) => {
    setIsLoading(true);
    setError("");
    setM3ter(id)
    navigate.push("/dashboard")
    setIsLoading(false);

    // // Simulate API call
    // new Promise((resolve) => setTimeout(resolve, 1500))
    //   .then(() => {
    //   })
    //   .catch(() => {
    //     setError("Failed to verify meter ID");
    //   })
    //   .finally(() => {
    //   });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center gap-y-4 px-5 py-12"
    >
      <div className="text-left w-full">
        <h2 className="text-2xl font-bold">
          Get <span style={{ color: "var(--link-color)" }}>started</span>
        </h2>
        <p className="text-md mt-2 text-[#1a1a1a]">
          Link your meter and start managing your energy usage; <span className="text-[#cc440a]">Select your M3ter to proceed.</span>
        </p>
      </div>
      <div className="flex flex-wrap m-auto gap-4">
        {m3ters && m3ters.map((i) => (
          <M3ter handleClick={handleSubmit} isLoading={isLoading} key={`${i}`} seed={i} />
        ))}
      </div>
    </div>
  );
}
